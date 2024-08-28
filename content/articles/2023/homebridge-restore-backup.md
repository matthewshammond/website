---
title: "Homebridge Restore Backup"
date: 2023-11-24
image: images/2023-thumbs/homebridge.svg
author: "Matt Hammond"
description: "Tutorial on how to restore Homebridge from a backup."
---

## Issue

When updating homebridge in docker with the onzu build, sometimes you may not be able to restore from your backup. I was able to restore via the command line; however, I had to manually reinstall my plugins. The good news is once you install the plugins via the Web UI, you do not have to reconfigure.

## Fix

Extract your **homebridge-backup.tar.gz** into a folder. Navigate to `/var/lib/docker/volumes/homebridge_homebridge/_data` (you may have to switch to root - `sudo su`).

In `/var/lib/docker/volumes/homebridge_homebridge/\_data` delete:

- accessories
- auth.json
- backups
- config.json
- persist
- plugin-persist
- .uix-dashboard.json
- .uix-secrets

Then copy everything from the storage folder within the extracted **homebridge-backup.tar.gz** (ensure you also copy **.uix-dashboard.json** & **.uix-secrets**) to the `/var/lib/docker/volumes/homebridge_homebridge/\_data`.

You then need to change the ownership of these files `chown root:root accessories auth.json backups config.json persist plugin-persist .uix-dashboard.json .uix-secrets`

## Conclusion

Once this is all complete, restart your container and navigate to `localhost:8581`. In the Web UI go to plugins and find and install all the plugins you had. When the plugin installs, just close it, the configuration is already done from copying all your files earlier. For good measure, restart homebridge via the Web UI.
