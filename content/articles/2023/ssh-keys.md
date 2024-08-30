---
title: "SSH Keys"
date: 2023-01-11
image: images/2023-thumbs/ssh-keys.png
draft: false
author: "Matt Hammond"
description: "Create your own ssh keys in the terminal."
---

## create ssh key in terminal

```bash
ssh-keygen -a 100 -t ed25519 -f ~/.ssh/id_ed25519 -C "john@example.com"
```

- `-a`: It’s the numbers of KDF (Key Derivation Function) rounds. Higher numbers result in slower passphrase verification, increasing the resistance to brute-force password cracking should the private-key be stolen.
- `-t`: Specifies the type of key to create, in our case the Ed25519.
- `-f`: Specify the filename of the generated key file. If you want it to be discovered automatically by the SSH agent, it must be stored in the default `.ssh` directory within your home directory.
- `-C`: An option to specify a comment. It’s purely informational and can be anything. But it’s usually filled with `<login>@<hostname>` who generated the key.
