---
title: "Test Post"
tags: ['formatting', 'templates', 'embedding', 'a really long tag', 'trying to overflow']
date: '2020-08-22'
template: post.mustache
testTag: tag variable
---

This is an example post to ensure stuff works for the actual posts.

## Text Formatting
This is an example with a [link](www.google.com), and another link to [www.jasondsouza.org](http://www.jasondsouza.org). To ensure proper link styling. Also, here's some *italicized text* as well as some **bold text**.

The following is a quote:

> There are these two young fish swimming along and they happen to meet an older fish swimming the other way, who nods at them and says "Morning, boys. How's the water?" And the two young fish swim on for a bit, and then eventually one of them looks over at the other and goes "What the hell is water?" - David Foster Wallace

Then, this is a list with a few elements in it:

- Element 1
- Element 2
- Element 3
  - Subelement A
  - Subelement B
- Element 4

## Sidenotes
Along with the main written body of text, my site styling has support for sidenotes.
<span class="mgnote">Which automatically show up as parenthesized text on small screens</span>

## Snippet
This snippet is directly embedded within the markdown
```dart
void main() {
  print('hello world');
}
```

## Transclusion
And this snippet is transcluded from a file:

<pre>
<code class="language-html">
{{> web/static/googlef7b46688e3c22ec7.html}}
</code>
</pre>

*Note that transclusion directly from a post uses different path semantics than a regular reference. This is because the post transclusion happens as part of the static site generation pipeline, before the rest of the assets have been moved to their final places. (The other references are used by the browser, post-site gen). Practically this means that you must use the `web/static/...` relative path instead of the `/static/...` path that we use elsewhere*

## Client Side Logic
Custom frontend logic to manipulate post:

<pre><code id="sample"></code></pre>

The element above is populated via dart running on the client.

<script src="/scripts/samplePopulate.dart.js"></script>

## Pictures
This is a sample section with a picture embedded in it.

![](/static/dartboard.jpg)

And more text below the image! With embedded {{ testTag }} content.
