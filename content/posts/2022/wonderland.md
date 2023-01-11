---
title: "Wonderland"

date: 2022-12-18
url: /wonderland/
image: images/2022-thumbs/wonderland.jpg
categories:
  - CTF
tags:
  - CTF
draft: false
---

## Questions
1. Obtain the flag in user.txt `thm{"Curiouser and curiouser!"}`
2. Escalate your privileges, what is the flag in root.txt? `thm{Twinkle, twinkle, little bat! How I wonder what you’re at!}`

---
## Notes
- IP = 10.10.59.87


### Exposed Services
```bash
22
80
```

### Users:Passwords
- alice:HowDothTheLittleCrocodileImproveHisShiningTail
- hatter:WhyIsARavenLikeAWritingDesk?

### Vulnerabilities
- CVE-2021-4034
- CVE-2022-2588

### Flags
- Found flag one via `cat /root/user.txt`

- found password.txt: WhyIsARavenLikeAWritingDesk?

---
## Commands
`ping $IP`

`sudo nmap -sC -sV -oN scans/initial $IP`
