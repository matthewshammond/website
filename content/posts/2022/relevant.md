---
title: "Relevant"

date: 2022-12-28
url: /relevant/
image: images/2022-thumbs/relevant.jpg
categories:
  - CTF
tags:
  - CTF
draft: false
---

## Questions
1. User Flag `THM{fdk4ka34vk346ksxfr21tg789ktf45}`
2. Root Flag `THM{1fk5kf469devly1gl320zafgl345pv}`

---
## Notes
- myIP = 10.18.53.113
- IP = 10.10.134.240

### Exposed Services
```bash
80
135
139
445
3389
```

- found passwords.txt on samba share nt4wrksv

### Users:Passwords
- Bob:!P@$$W0rD!123
- Bill:Juw4nnaM4n420696969!$$$

### Vulnerabilities
- CVE-2017-0143

---
## Commands
`ping $IP`

`sudo nmap -sC -sV -oN scans/initial $IP`

`smbmap -u guest -H $IP`
