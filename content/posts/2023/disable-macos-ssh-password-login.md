---
title: "Disable MacOS SSH Password Login"

author: Matt Hammond
date: 2023-01-16
url: /disable-macos-ssh-password-login/
image: images/tux_apple.png
categories:
  - MacOS
  - Networking
tags:
  - ssh
  - ventura
draft: false
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
