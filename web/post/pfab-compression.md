---
title: "PFAB Compression"
rss: true
tags: ['engineering']
date: '2020-07-16'
template: post.mustache
description: "A quick response to Rob Heaton's (PFAB #18) post on compression for beginners."
---

## Background
Rob Heaton wrote a post about [shrinking serialized data](https://robertheaton.com/pfab18-shrinking-serialized-data/) as part of his excellent [PFAB series](https://advancedbeginners.substack.com/), and while he talked about a variety of tricks for making the serialization format itself more space efficient, he left out the easiest optimization trick in the book... compression.
<span class="mgnote">It should be noted that he's been splitting up his thoughts on the particular program under analysis [across](https://robertheaton.com/pfab16-how-to-make-your-code-faster/) a [few](https://robertheaton.com/pfab17-precomputation-sounds-like-cheating-but-isnt/) [posts](https://robertheaton.com/pfab18-shrinking-serialized-data/), so it very well may be the case that he's just saving compression for a later post</span>

Regardless, I wanted to use his current analysis as a jumping off point to run a quick test and see how various compression algorithms stacked up in terms of space savings. If you haven't already read his posts, the below won't make much sense in isolation, so please start at [PFAB 16](https://robertheaton.com/pfab16-how-to-make-your-code-faster/) and work your way through [17](https://robertheaton.com/pfab17-precomputation-sounds-like-cheating-but-isnt/) and [18](https://robertheaton.com/pfab18-shrinking-serialized-data/).

*Update: in [PFAB 19](https://robertheaton.com/pfab19-working-with-raw-bytes/), which wasn't out when I wrote these thoughts up, Rob comes to much the same conclusions I did below regarding favoring compression for real world use cases.*

## Generate RGB Map
Python session to generate the entire RGB to ANSI color mapping (mostly cribbed from [here](https://github.com/robert/programming-feedback-for-advanced-beginners/tree/master/editions/16-ascii-speed)). This is the data that we will be optimizing later on.

```python
import pickle
with open('ansi_color_dict.pkl.txt', 'rb') as f:
    color_dict = pickle.load(f)

def euclidean_distance(color1, color2):
    diff = lambda x, y: (y - x) ** 2
    distance = 0
    for value in range(3):
        distance += diff(color1[value], color2[value])
    return distance

def closest_ANSI_color(color):
    distances = {}
    for key in color_dict:
        distance = euclidean_distance(color_dict[key], color)
        distances[key] = distance
    return min(distances, key=distances.get)

inverted_color_dict = {}
for ansi, rgb in color_dict.items():
    inverted_color_dict[str(rgb)] = ansi

GRIDLINES = [0x00, 0x5F, 0x87, 0xAF, 0xD7, 0xFF]
def rgb_to_ansi(rgb):
    def snap_value(val):
        return min(GRIDLINES, key=lambda el: abs(val - el))
    rgb = [snap_value(v) for v in rgb]
    return inverted_color_dict[str(rgb)]

entire_map = {}
for r in range(256):
    print(r)
    for g in range(256):
        for b in range(256):
            rgb = (r,g,b)
            col = rgb_to_ansi(rgb)
            entire_map[str(rgb)] = col

import json
with open('rgb_mapping.json', 'w') as f:
    json.dump(entire_map, f)
```

Rob [uses some back of the napkin math](https://robertheaton.com/pfab18-shrinking-serialized-data/) to calculate that this JSON mapping will be around 434MB, and the one I generated comes in at 355MB. Prettified, it is 387MB.


## Compression Analysis
With the serialized JSON data in hand, let's try a few compression algorithms and see how much space they save.

```sh
# Recreate the pretty JSON version of the color mapping
~> cat rgb_mapping.json | jq "." > rgb_mapping.pretty.json
# Regular GZIP compression
~> gzip -k rgb_mapping.json
~> gzip -k rgb_mapping.pretty.json
# GZIP at the fastest vs best compression level
~> gzip -k --fast --suffix '.fast.gz' rgb_mapping.json
~> gzip -k --fast --suffix '.fast.gz' rgb_mapping.pretty.json
~> gzip -k --best --suffix '.best.gz' rgb_mapping.json
~> gzip -k --best --suffix '.best.gz' rgb_mapping.pretty.json
# BZIP2 at default, fastest, and best
~> bzip2 -k rgb_mapping.json
~> bzip2 -k --fast --stdout rgb_mapping.json > rgb_mapping.json.fast.bz2
~> bzip2 -k --best --stdout rgb_mapping.json > rgb_mapping.json.best.bz2
# Brotli
~> brotli -k rgb_mapping.json
# Compression results
~> ll | grep rgb_mapping
-rw-r--r--   1 jason  staff   355M Jul 15 22:39 rgb_mapping.json
-rw-r--r--   1 jason  staff    18M Jul 15 23:20 rgb_mapping.json.best.bz2
-rw-r--r--   1 jason  staff    39M Jul 15 22:39 rgb_mapping.json.best.gz
-rw-r--r--   1 jason  staff   7.6M Jul 15 22:39 rgb_mapping.json.br
-rw-r--r--   1 jason  staff    18M Jul 15 22:39 rgb_mapping.json.bz2
-rw-r--r--   1 jason  staff    16M Jul 15 23:18 rgb_mapping.json.fast.bz2
-rw-r--r--   1 jason  staff    47M Jul 15 22:39 rgb_mapping.json.fast.gz
-rw-r--r--   1 jason  staff    41M Jul 15 22:39 rgb_mapping.json.gz
-rw-r--r--   1 jason  staff   387M Jul 15 23:05 rgb_mapping.pretty.json
-rw-r--r--   1 jason  staff    39M Jul 15 23:05 rgb_mapping.pretty.json.best.gz
-rw-r--r--   1 jason  staff    18M Jul 15 23:05 rgb_mapping.pretty.json.bz2
-rw-r--r--   1 jason  staff    47M Jul 15 23:05 rgb_mapping.pretty.json.fast.gz
-rw-r--r--   1 jason  staff    42M Jul 15 23:05 rgb_mapping.pretty.json.gz
```

For comparison, at the end of Rob's post, he had tailored his serialization format such that it took 8 bytes per color pairing instead of the original 26, meaning that the serialized file would be 134MB. Compared to the originally calculated 434MB, that's a 70% reduction in size!

As we see above though, that 70% reduction is peanuts compared to using a standard compression library. The most well known and straightforward approach of vanilla GZIP compression yields a 41MB file, for a 90% reduction in size, already handily beating the custom serialization approach for little more than a standard library `gzip.compress` call.

We can also see that the compression libraries barely notice the "prettified" JSON and redundant characters (which makes sense when you think about how they work), which is a nice side-benefit.

Finally, if you're feeling adventurous, you can use a more heavily optimized compression library at the cost of slower serialization speed. [BZIP2](https://en.wikipedia.org/wiki/Bzip2) is a well established example which brings the file size down to the 18MB range, for a 96% reduction in size.
<span class="mgnote">An astute eye will notice that "fast" BZIP2 compression results in a smaller file than regular or "best" BZIP2. Explaining why that happens is left as an exercise for the reader</span>

[Brotli](https://en.wikipedia.org/wiki/Brotli), which uses even more sophisticated compression techniques gets the file size all the way down to 7.6MB, for a whopping 98.2% reduction in size.

The fact that Brotli is able to take the RGB mapping data and losslessly make it *57 times* smaller is quite incredible. Even more interesting, [Brotli has been optimized by Google for serving web assets](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html), and so retains relatively quick decompression speeds (compression takes quite long by comparison, but since web assets are written once and served many times, that is an acceptable tradeoff). That fits nicely into the framework Rob constructed around [precomputation tradeoffs](https://robertheaton.com/pfab17-precomputation-sounds-like-cheating-but-isnt/) for this ASCII art program.

## Concluding Thoughts
While inventing your own serialization technique and/or format is fun and can be a useful learning exercise, in real world production code, it's often more prudent to simply use a widely supported format like JSON and compress the resulting data. This ensures compatibility with other software and tools, and gets you out of the business of reinventing the wheel so you can focus on solving the business problems at hand.
