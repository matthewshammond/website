---
title: "Steganography Payload"

date: 2023-01-11
url: /steganography-payload/
image: images/tux_apple.png
categories:
  - Dev Ops
  - Linux
  - MacOS
tags:
  - steganography
  - hacking
  - cli
  - terminal
draft: false
---

## Create Payload
- create a bash script (i.e. payload.sh)
```
#!/bin/bash
echo "This is the payload script"
```
- transform script to base64
```
cat payload.sh | base64 | tr -d '\n'
```
## Embed Payload
- clear metadata from image
```
exiftool -all= image.jpg
```
- load hash into image
```
exiftool -Certificate='base64 hash' image.jpg
```
## Execute Payload
```
p=$(cat image.jpg | grep Cert -a | sed 's/<[^>]*>//g' | base64 -D);eval $p
```
