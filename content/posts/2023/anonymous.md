---
title: "Anonymous"

date: 2023-01-04
url: /anonymous/
image: images/2023-thumbs/anonymous.png
categories:
  - CTF
tags:
  - CTF
draft: false
---

## Questions
1. Enumerate the machine.  How many ports are open? `4`
2. What service is running on port 21? `ftp`
3. What service is running on ports 139 and 445? `smb`
4. There's a share on the user's computer.  What's it called? `pics`
5. user.txt `90d6f992585815ff991e68748c414740`
6. root.txt `4d930091c31a622a7ed10f27999af363`

---
## Notes
- myIP = 10.18.53.113
- IP = 10.10.63.78

### Exposed Services
```bash

```

### Users:Passwords
- 

### Vulnerabilities
- 

---
## Commands
`ping $IP`

`sudo nmap -vv -sC -sV -oN scans/initial $IP`
