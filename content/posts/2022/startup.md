---
title: "Startup"

date: 2022-12-22
url: /startup/
image: images/2022-thumbs/startup.png
categories:
  - CTF
tags:
  - CTF
draft: false
---

## Questions
1. What is the secret spicy soup recipe? `love`
2. What are the contents of user.txt? `THM{03ce3d619b80ccbfb3b7fc81e46c0e79}`
3. What are the contents of root.txt? `THM{f963aaa6a430f210222158ae15c3d76d}`

---
## Notes
- myIP = 10.18.53.113
- IP = 10.10.179.150

### Exposed Services
```bash
21
22
80
```

### FTP
- ftp dir writeable
- uploaded reverse shell to FTP

### Users:Passwords
- maya
- lennie:c4ntg3t3n0ughsp1c3 (found from wireshark)
- vagrant

### Root Files
```bash
/vagrant
/recipe.txt
/vmlinuz.old
/vmlinuz
/incidents
/initrd.img
/initrd.img.old
```

### Vulnerabilities
- 

---
## Commands
`ping $IP`

`sudo nmap -sC -sV -oN scans/initial $IP`

gobuster dir -u http://10.10.79.182 -w /usr/local/share/wordlists/dirbuster/directory-list-2.3-medium.txt | tee scans/gobuster
