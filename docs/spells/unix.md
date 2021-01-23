---
title: "Unix Spells"
tags: ['cli', 'less', 'bash', 'fish']
template: spell.mustache
---

## General

### Check Network Utilization

```bash
sudo iftop -B
```

### Process Substitution
Creating a named pipe is done in [fish](https://fishshell.com/) with the `psub` command as follows:

```
diff (sort a.txt | psub) (sort b.txt | psub)
```

References: `man psub`

### Extract and Pretty Print Stack Trace from Logback Logs

```bash
cat tmp | jq ".stack_trace" | xargs printf
```

## Less
Tips and tricks with less

### Display ANSI color codes
```bash
less -R
```

### Display Line Numbers
```bash
less -N
```

All these less commands can be passed in as args, or when already in less.
Also, some of the search and movement syntax of vim works in less as well.

## Tcpdump

To make the output legible, as well as manageable, make sure to
1. specify the port you care about
2. use the -XX and -i flags to get ascii output next to the binary

```bash
sudo tcpdump -XX -i eth0 port 44380 > /tmp/dump
```

## Find

### List files with specific extension and perform command on them
```bash
# In this case, list video files and for each one, extract metadata
find . -type f \( -iname \*.mkv -o -iname \*.mp4 -o -iname \*.avi \) -print0 | while IFS= read -r -d '' file; do
  ffprobe -v quiet -print_format json -show_format -show_streams $file;
done > ~/video_metadata.json
```
