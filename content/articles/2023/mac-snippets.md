---
title: "Mac Snippets"
date: 2023-01-11
image: images/tux_apple.png
draft: false
author: "Matt Hammond"
description: "Collection of random terminal snippets for macOS."
---

## Code Snippets

- remove duplicates from $PATH

```bash
typeset -U PATH
```

- link airport

```bash
sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport /usr/local/bin/airport
```

- partition USB

```bash
sudo diskutil partitionDisk /dev/disk2 4 GPT ExFAT Tails 32G APFS Keys 10M ExFAT Drive 1G ExFAT Go\ Drive R
sudo diskutil apfs encryptVolume disk3s1 -user disk
```

- format USB

```bash
diskutil erasedisk ExFAT GoDrive disk2 #format for Linux only
diskutil erasedisk MS-DOS GODRIVE disk2 #format for Mac/Linux
```

- write image to usb

```bash
sudo gdd if=~/Downloads/debian.iso of=/dev/disk2 status=progress bs=4M
```

- unload macfuse kernel

```bash
sudo kextunload -b io.macfuse.filesystems.macfuse
```

## Password Snippets

Storing and retrieving passwords in bash scripts from the macOS keychain
#password

- Allow access to macOS keychain (use only if creating keychains remote)

```bash
security -i unlock-keychain
```

- Set up password in macOS keychain
  - -T = immediately grant access without GUI confirmation

```bash
security add-generic-password -T /usr/bin/security -s "Keychain item name here" -a "username here" -w
```

- Retrieve the password in a script like this:

```bash
PASSWORD=$(security find-generic-password -s "Keychain item name here" -a "username here" -w)
```

- Error catching for passwords

```bash
pw_name="CLI Test"
pw_account="armin"
if ! cli_password=$(security find-generic-password -w -s "$pw_name" -a "$pw_account"); then
	echo "could not get password, error $?"
	exit 1
fi
echo "the password is $cli_password"
```

## Sudo Password TouchID

- edit `/etc/pam.d/sudo`
- add following line to the top

```bash
auth       sufficient     pam_tid.so
```
