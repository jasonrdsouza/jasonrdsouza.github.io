---
title: "Terminal Multiplexer Spells"
tags: ['iterm', 'tmux', 'screen']
template: spell.mustache
---

## Tmux

### iTerm and Tmux Integration
Tmux integrates with iTerm to create a seperate iTerm window (with all the normal shortcut keys),
instead of a virtual one. This can be accomplished as follows:

1. in iTerm, ssh to the host you want to run tmux in
2. run `tmux -CC`, which should create a new iTerm window. Running normal commands like `<CMD>-T` to create a new tab will create a new virtual tab on the host you are sshed into
3. detach by pressing `<ESC>` in the original window that you ran `tmux -CC` in
4. reattach by running `tmux -CC attach`

## Screen

```
# reattach to screen session
screen -r <ID>
# detach from screen session
<CTRL>-A, <CTRL>-D
```
