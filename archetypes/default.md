---
title: "{{ replace .Name "-" " " | title }}"

author: Matt Hammond
date: {{ now.Format "2006-01-02" }}
url: /{{ .Name }}/
image: images/2024-thumbs/{{ .Name }}.jpg
categories:
  - CTF
  - Dev Ops
  - Homelab
  - Linux
  - MacOS
  - Networking
  - Programming
tags:
  - Homelab
draft: false
---
