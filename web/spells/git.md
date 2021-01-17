---
title: "Git Spells"
tags: ['git', 'github']
template: spell.mustache
---


### Move master branch pointer to previous commit
For example, if you accidentally commit to master instead of making a branch
```bash
git reset --hard master~1
```

### Remove unnecessary whitespace

http://git-scm.com/docs/git-stripspace

```bash
git stripspace
```

### See unique authors (by commit amount)

```bash
git shortlog -sn

# Optionally specifying start and end date
git shortlog -sn --since='10 weeks' --until='2 weeks'
```

### Create an archive of the code (ignoring gitignored files!)

```bash
git archive --format zip --output <filepath> master
```

You can replace `master` in the command above with and tag, branch, or sha

### Bailing out of an in-progress merge

```bash
git merge --abort
```

### Ignore whitespace in diff

```bash
git diff -w
git show -w
```

### Show changed words instead of lines

```bash
git diff --word-diff
```

### Apply a patch
Most often, the "patch" will be a diff file created with `git diff`.

```bash
git checkout <BRANCH_TO_APPLY_PATCH_TO>
git apply <PATH_TO_PATCH_FILE>
```

## Github

### Ignore Whitespace in Github Diff

Add `?w=1` to the URL to see the diff with whitespace ignored

### Plaintext Patch and Diff view

- Add `.diff` to a pull request (or individual commit) url to get a plaintext diff view
- Likewise, add `.patch` to get a plaintext patch view

### Adjust Tab Space in view

Add `?ts=4` to the URL to change the width of tab characters to 4 spaces

### Gist embedded view mode

Add `.pibb` to the end of a Gist url in order to get an HTML only version of the gist suitable for display

### Line highlighting

Adding `#L52` to the end of a code file url will highlight that line. Clicking the line works as well.
This also works with ranges, like `#L53-L60`. Holding shift and clicking the two lines works as well.

### Closing issues via Commit Messages

If a particular commit fixes an issue, any of the keywords `fix/fixes/fixed`, `close/closes/closed`
or `resolve/resolves/resolved`, followed by the issue number, will close the issue once it is committed
to the master branch.

### Public SSH Keys

You can get a list of public ssh keys in plain text format by visiting:

```
https://github.com/{user}.keys
```
