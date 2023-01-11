---
title: "Looking Glass"

date: 2022-12-19
url: /looking-glass/
image: images/2022-thumbs/looking-glass.png
categories:
  - CTF
tags:
  - CTF
draft: false
---

## Questions
1. Get the user flag. `thm{65d3710e9d75d5f346d2bac669119a23}`
2. Get the root flag. `thm{bc2337b6f97d057b01da718ced6ead3f}`

---
## Notes
- IP = 10.10.143.93

### Exposed Services
```bash
13338
```

### Users:Passwords
- jabberwock:AskingHandrailObeyedBeauty
    - found by entering below secret into ssh port 13338
- secret:bewareTheJabberwock
    - found via Vigenère Cipher Decoder (key length 20)
- humptydumpty:zyxwvutsrqponmlk

### Vulnerabilities
- 

### Flags
- user.txt - reverse string with cyberchef

- crontab runs script at reboot
    - setup a reverse shell

- humptydumpty.txt has 8 hashes
    ```bash
    maybe
    one
    of
    these
    is
    the
    password
    7468652070617373776f7264206973207a797877767574737271706f6e6d6c6b = the password is zyxwvutsrqponmlk
    ```

---
## Commands
`ping $IP`

`sudo nmap -sC -sV -oN scans/initial $IP`

`ssh -o HostKeyAlgorithms=+ssh-rsa root@10.10.147.17 -p 13338`
