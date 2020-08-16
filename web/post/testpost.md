---
title: "Test Post"
tags: ['code', 'dartlang']
template: post.mustache
testTag: tag variable
---

This is an example post to ensure stuff works for the actual posts.

### Snippet
This snippet is directly embedded within the markdown
```dart
void main() {
  print('hello world');
}
```

### Transclusion
And this snippet is transcluded from a file:
<pre>
<code class="language-html">
{{> static/googlef7b46688e3c22ec7.html}}
</code>
</pre>

### Client Side Logic
Custom frontend logic to manipulate post:

<pre><code id="sample"></code></pre>

The element above is populated via dart running on the client.

<script src="/scripts/samplePopulate.dart.js"></script>

### Pictures
This is a sample section with a picture embedded in it.

![](/static/dartboard.jpg)

And more text below the image! With embedded {{ testTag }} content.
