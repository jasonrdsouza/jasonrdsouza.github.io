---
title: "Vim Spells"
tags: ['vi', 'vim']
template: spell.mustache
---


## Movement
- `zz` move the current line to the middle of the screen
- `w` go to the next word
- `b` go to the previous word
- `e` go to the end of the word
- `W/B/E` same as above, but only treats whitespace as a separator
- `H` go to the first line of current screen.
- `M` go to the middle line of current screen.
- `L` go to the last line of current screen.
- `CTRL-f` jump forward one full screen.
- `CTRL-b` jump backwards one full screen
- `CTRL-d` jump forward (down) a half screen
- `CTRL-u` jump back (up) one half screen

## Spacing

### Convert tabs to spaces
*assumes `expandtab` is on*

```vim
:retab
```

### Strip trailing whitespace
```vim
:%s/\s\+$//e
```

## Buffers

Close all open buffers
```vim
:%bd
```

## Splits

Creating them
```vim
:sp (horizontal split)
:vsp (vertical split)
```

Jumping around them
```vim
CTRL-<hjkl> (movement keys)
<LEADER>-<hjkl>
```

Open a split with a specific file
```vim
:sp filename
:vsp filename
```

## Scratch space

- courtesy of https://github.com/mtth/scratch.vim plugin
- `gs` in normal mode opens the scratch window and enters insert mode. The scratch window closes when you leave insert mode.
= can also use `:Scratch`

## Uppercase a word
```vim
gUiw
```

## Sort lines
Highlight the lines you want to sort, and then execute `:sort`

## Format text
Vim lets you run any command line tool on a buffer/ selection of text via the following format, where `range` is the selection of text, and `filter` is the command to run. The output of the command, when fed the filter, replaces the selection:

```vim
:{range}!{filter}
```

### JSON formatting
Requires that the `jq` command is installed. `%` references the current buffer.
```vim
%!jq
```

## Execute command on multiple lines

The `g` command is the "global" command to execute other commands. In this case, you can use it with the `norm` command to perform a change on lines that match a specific pattern (or all lines).

For example, if you want to add a semicolon to the end of all lines that start with a number, you could do that as follows:
```vim
:g/^\d/norm A;
```
In this case, instead of substituting the line for something else, you are telling Vim to execute the "normal mode" command of moving to the end of the line and entering insert mode (with `A`), and then adding a semicolon.

This is pretty powerful because you have the ability to perform a motion on all the lines matching a specific pattern.

## Visual select and insert

```vim
CTRL-v
```

Once you have selected the block you want, you can edit all of the selected lines at once with:

```vim
SHIFT-i (insert whatever you want) <ESC>
```


