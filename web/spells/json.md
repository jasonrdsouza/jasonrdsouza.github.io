---
title: "JSON Spells"
tags: ['jq', 'cli']
template: spell.mustache
---

## JQ Command Line JSON Parser
https://stedolan.github.io/jq/

### Extract specific field from JSON Array of Dicts
```bash
jq ".ArrayKey[].SpecificFieldInDict"
```

### Print strings without quotes
```bash
jq --raw-output ".id"
```

### Make each JSON object only take up 1 line
```bash
# Quickly count how many objects there are
jq ".events[].message" --compact-output | wc -l
```

### Get a range of a JSON array
```bash
jq ".events[0:6]"
```

### Extract set of fields from larger dict
```bash
jq '{desiredName: .fieldName, otherField: .arrayField[0].field, etc: .otherField}'

# Real world example extracting video properties from larger JSON dict
# the -s directive tells JQ to treat jsonlines format as if it were a JSON array
cat movie_list.json | jq -c '{filename: .format.filename, width: .streams[0].width, height: .streams[0].height}' | jq -s 'sort_by(.height)' > resolution_sorted_movie_list.json
```
