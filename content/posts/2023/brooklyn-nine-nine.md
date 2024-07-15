---
title: "Brooklyn Nine Nine"

author: Matt Hammond
date: 2023-01-03
url: /brooklyn-nine-nine/
image: images/2023-thumbs/brooklyn-nine-nine.jpg
categories:
  - CTF
tags:
  - CTF
draft: false
---

## Questions

1. User flag: `ee11cbb19052e40b07aac0ca060c23ee`
2. Root flag: `63a9f0ea7bb98050796b649e85481845`

---

## Notes

- myIP = 10.18.53.113
- IP = 10.10.223.9

### Exposed Services

```bash
21
22
80
```

### Users:Passwords

- Amy
- Jake
- Holt:fluffydog12@ninenine
- id_rsa:kevin (angelo..brenda)

### Vulnerabilities

-

- Web page had jpg.
- Stegcracker cracked jpg password
- steghide gave note.txt

---

## Commands

`ping $IP`

`sudo nmap -vv -sC -sV -oN scans/initial $IP`

`stegcracker brooklyn99.jpg /usr/share/wordlists/rockyou.txt`
`steghide extract -sf brooklyn99.jpg`
