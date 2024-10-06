---
title: "Steganography Payload"
date: 2023-01-11
image: images/2023-thumbs/steganography-payload.jpeg
draft: false
author: "Matt Hammond"
description: "Conceal a messages, information, or payload within other nonsecret text, data, or image."
---

## Create Payload

- create a bash script (i.e. payload.sh)

```bash
#!/bin/bash
echo "This is the payload script"
```

- transform script to base64

```bash
cat payload.sh | base64 | tr -d '\n'
```

## Embed Payload

- clear metadata from image

```bash
exiftool -all= image.jpg
```

- load hash into image

```bash
exiftool -Certificate='base64 hash' image.jpg
```

## Execute Payload

```bash
p=$(cat image.jpg | grep Cert -a | sed 's/<[^>]*>//g' | base64 -D);eval $p
```
