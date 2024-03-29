---
title: "Homelab Server Security"
tags: ['homelab', 'caddy', 'draft']
date: '2020-01-14'
template: post.mustache
---

## Background
After [setting up my homelab server](/homelab-server), I immediately got worried about the security of having a computer with private/ personal data on it open to the internet. That sent me down a rabbit hole of best practices and considerations, the result of which I've written up here. Hopefully it's helpful for other people hoping to self host.

## Updates
- os updates
- software updates (through package manager, or other means)
  - slightly less important if you front the service with an auth portal served by your reverse proxy
  - but this makes it essential that you keep the reverse proxy up to date

## SSH Security
- disable password login (only use public key)
- other stuff to disable
- fail2ban mention
- creating system users that don't have shell/ login ability?
- if a shared system, only whitelist specific user accounts

## TLS Everywhere
- Caddy makes this super easy, but even with Nginx and Certbot, it's very automated/ easy... no excuse to be serving unencrypted traffic

## Service Auth
- Gate everything behind an auth screen served by your reverse proxy
  - this secures your private data while allowing you to centralize the user accounts
  - also adds additional protection just in case one of the services you're running does have a vulnerability
- Discussion of basic auth and how it's good enough if you ensure TLS
- SSO as future work?

## Log Retention
For reverse proxy (caddy example), and running services like sshd.

## SSHd Log Analysis Raw Notes
sshd logs located in /var/log/auth.log (rotation enabled by default, so might need to decompress and concatenate files together depending on desired analysis time range)

Once you have the file, you can use simple UNIX commands to glean insights

Analysis date range:
```bash
cat auth.log | cut -c 1-6 | sort | uniq
```

Successful login attempts:
```bash
cat auth.log | grep 'sshd' | grep 'session opened' | wc -l
```

Unique successful login usernames:
```bash
cat auth.log | grep sshd | grep 'session opened' | awk '{ print $11 }' | sort | uniq
```

Unique IP addresses that successfully logged in:
```bash
cat auth.log | grep 'sshd' | grep '.*Accepted publickey.*' | awk '{ print $11 }' | sort | uniq
```

Failed login attempts:
```bash
cat auth.log | grep 'sshd' | grep 'Invalid user' | wc -l
```

Failed login users (grouped and sorted by attempts):
```bash
cat auth.log | grep 'sshd' | grep 'Invalid user' | awk '{ print $8 }' | sort | uniq -c | sort -r
```

Failed login IPs grouped and sorted by attempts:
```bash
cat auth.log | grep 'sshd' | grep 'Invalid user' | awk '{ print $10 }' | sort | uniq -c | sort -r
```
