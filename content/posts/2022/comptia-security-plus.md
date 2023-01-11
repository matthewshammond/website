---
title: "Comptia Security+"

date: 2022-10-01
url: /comptia-security-plus/
image: images/2022-thumbs/comptia-security-ce-certification.png
categories:
  - Dev Ops
tags:
  - DevOps
  - CyberSecurity
draft: false
---

## General Information
- CSR
	- CSEPOOLCSK
- Encryption Alogorithms
	- RED fishES
	--A-----S
	-----H
	- Don't smoke HASH, have some integrity
	- Everything else is for confidentiality
- Cyber Attack Identification
	- cookies = XSS = enable input validation
	- DNS = DNS Poisoning = Use DNSSEC for DNS integrity
	- multiple sources = Botnet = activate DDoS protection
	- spoofing = smurf = disable ip-directed broadcasts at the router
	- ping | maximum = ping of death = use a firewall to check fragmental IP packets for maximum size
	- remotely = RAT = disable remote access services
	- saves old messages = session replay attack = use session timestamps
	- self-propogating | exploit default = worm = change default app passwords
	- personal = spear phishing = analyze email headers
	- hardware device = keylogger = 2FA or MFA
	- malicious scripts pages = watering hole = input validation
	- hidden access = backdoor = execute code review
- MITRE ATT&CK Framework
	- RW DEICE
		- Reconnaissance
		- Weaponization
		- Delivery
		- Exploitation
		- Installation
		- Command & Control (C2)
		- Exfiltration
- Security Control
	- Data Center
		- SMASH PP
			- Sniffer
			- Man Trap
			- Antivirus
			- Strong Password
			- Host Based Firewall
			- Popup Blocker
			- Proximity Badge
- 7 Layer OSI Model
	- Please Do Not Throw Sausage Pizza Away
		- Physical
		- Data Link
		- Network
		- Transport
		- Session
		- Presenation
		- Application
- Cloud Computing Modules
	- Traditional - cloud provides nothing
	- SaaS - cloud provides everything
	- PaaS - business provides Applications
	- IaaS - cloud provides Networking, Storage, Server HW, Virtualization (NSSHV)
