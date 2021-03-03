---
title: "Markdown Spells"
tags: ['markdown', 'md']
date: '2021-03-03'
template: spell.mustache
---

### Embedding Images

Embedding images is done via a syntax similar to regular links:

```md
![alt text](http://example.com/image.jpg)
```

### Embedded HTML

Markdown supports HTML, so you can put in regular HTML elements (like `<div>`) if you want, but doing so means that anything within that element must also be regular HTML. In some cases, it's convenient to demarcate a section of a markdown doc with an HTML element, but then write markdown within that element. In most varieties of markdown, you can accomplish that by specifying `markdown="1"` in the tag like so:

```md
### Header

Regular *markdown* here

<div class="something" markdown="1">
- regular markdown
- once *again*
</div>
```

Source: https://css-tricks.com/little-stuff-markdown-always-forget-google/

### Lists with Multiple Lines
Often times I want to use lists in markdown, but have the contents of each list element span multiple lines. Doing that with regular line breaks, however, causes the markdown parser to start a new list (and restart the numbering). The solution is to indent the subsequent lines of a given list item to ensure that it is considered part of that same item. For example:

```md
1. List item 1
   more stuff for item 1
2. List item 2
```

Source: https://css-tricks.com/little-stuff-markdown-always-forget-google/

### Header IDs

Sometimes it's convenient to add custom IDs to markdown headers to allow for intra-page navigation/ scripting. Different varieties of markdown handle this slightly differently, but most will automatically add an ID on all headings automatically (which matches the heading text). Some will let you customize the ID like so:

```md
### Header {#custom-id}
```

Source: https://css-tricks.com/little-stuff-markdown-always-forget-google/
