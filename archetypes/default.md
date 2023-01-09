---
title: "{{ replace .Name "-" " " | title }}"

date: {{ now.Format "2006-01-02" }}
url: /{{ .Name }}/
image: images/2023-thumbs/{{ .Name }}.jpg
categories:
  - CTF
  - Dev Ops
  - Linux
  - MacOS
  - Networking
  - Programming
tags:
  - CTF
draft: false
---
