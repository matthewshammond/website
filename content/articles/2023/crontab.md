---
title: "Crontab"
date: 2023-01-12
image: images/tux_apple.png
draft: false
author: "Matt Hammond"
description: "Create commands to execute at a specified time and on a regular schedule with crontab."
---

```
# ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of week (0 - 6) (Sunday to Saturday;
# │ │ │ │ │                                   7 is also Sunday on some systems)
# │ │ │ │ │
# │ │ │ │ │
# * * * * *  command_to_execute https://crontab.guru

# Sync AUG map files to backup dir
0 20 * * * rsync -av --exclude={".DS_Store",".git*","Icon?"} ~/Documents/Maps/AUG/ ~/Documents/Maps/AUG\ Backup/ 1>${HOME}/logs/cron.log

# Send email when system reboots
@reboot ${HOME}/.dotfiles/scripts/rebootemailcli.zsh

# Update domain ip
*/30 * * * * /bin/bash ${HOME}/.dotfiles/scripts/cloudflare.sh
```
