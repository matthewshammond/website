---
title: "Crack the Hash"

author: Matt Hammond
date: 2022-12-18
url: /crack-the-hash/
image: images/2022-thumbs/crack-the-hash.jpg
categories:
  - CTF
tags:
  - CTF
draft: false
---

Cracking hashes challenges

## Questions

1. 48bb6e862e54f2a795ffc4e541caed4d `easy`
2. CBFDAC6008F9CAB4083784CBD1874F76618D2A97 `password123`
3. 1C8BFE8F801D79745C4631D09FFF36C82AA37FC4CCE4FC946683D7B336B63032 `letmein`
4. $2y$12$Dwt1BZj6pcyc3Dy1FWZ5ieeUznr71EeNkJkUlypTsgbX1H68wsRom `bleh`
5. 279412f945939ba78ce0758d3fd83daa `Eternity22`
6. F09EDCB1FCEFC6DFB23DC3505A882655FF77375ED8AA2D1C13F640FCCC2D0C85 `paule`
7. 1DFECA0C002AE40B8619ECF94819CC1B `n63umy8lkf4i`
8. $6$aReallyHardSalt$6WKUTqzq.UQQmrm0p/T7MPpMbGNnzXPMAXi4bJMl9be.cfi3/qxIf.hsGpS41BqMhSrHVXgMpdjS6xeKZAs02. `waka99`
9. e5d8870e5bdd26602cab8dbe07a942c8669e56d6 `481616481616`

---

## Commands

`hashid $HASH`
`awk 'length($0) == 4' rockyou.txt > shortrockyou.txt`

1. `hashcat -m 0 -a 0 48bb6e862e54f2a795ffc4e541caed4d /usr/local/share/wordlists/rockyou.txt`
2. `hashcat -m 100 -a 0 CBFDAC6008F9CAB4083784CBD1874F76618D2A97 /usr/local/share/wordlists/rockyou.txt`
3. `hashcat -m 1400 -a 0 1C8BFE8F801D79745C4631D09FFF36C82AA37FC4CCE4FC946683D7B336B63032 /usr/local/share/wordlists/rockyou.txt`
4. `hashcat -m 3200 -a 0 '$2y$12$Dwt1BZj6pcyc3Dy1FWZ5ieeUznr71EeNkJkUlypTsgbX1H68wsRom' /usr/local/share/wordlists/shortrockyou.txt`
