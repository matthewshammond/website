---
title: "Disable MacOS SSH Password Login"
date: 2023-01-16
image: images/2023-thumbs/disable-macos-ssh-password-login.png
draft: false
author: "Matt Hammond"
description: "Steps on disabling MacOS SSH password login."
---

Create `000-hostname.conf` in `/etc/ssh/sshd_config.d`

## 000-hostname.conf

```
UsePAM no
PasswordAuthentication no
```

## Restart SSH

```
sudo launchctl stop com.openssh.sshd
sudo launchctl start com.openssh.sshd
```
