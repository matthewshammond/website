---
title: "ProxyToggle"
date: 2025-02-12T17:55:22-06:00
image: images/2025-thumbs/ProxyToggle.png
draft: false
author: "Matt Hammond"
description: "A sleek macOS menu bar app that lets you instantly enable or disable a SOCKS proxy with an SSH tunnel. Built with Python and Rumps, ProxyToggle simplifies secure browsing by automating SSH tunneling and proxy configuration with a single click. Whether you’re working remotely or securing your connection, ProxyToggle makes it effortless."
---

# ProxyToggle - One-Click SOCKS Proxy & SSH Tunnel for macOS

🔒 Need a simple way to toggle a SOCKS proxy and secure your connection?
🚀 ProxyToggle makes it effortless—just one click from your macOS menu bar.

Whether you’re working remotely, bypassing network restrictions, or securing your browsing, ProxyToggle handles everything for you.

{{< rawhtml >}}

<center><img src="/images/2025-thumbs/ProxyToggle.png" alt="ProxyToggle" title="ProxyToggle" width="500"></center>
{{< /rawhtml >}}

## ⚡ Why Use ProxyToggle?

- 🖥️ Menu Bar Integration – No need to run terminal commands—just click the menu bar icon.
- 🔄 One-Click Control – Instantly enable/disable your SOCKS proxy & SSH tunnel.
- 🛠 Automatic Process Management – Detects & manages SSH processes, so you don’t have to.
- 🔗 Persistent SSH Tunnel – Keeps your connection stable and auto-kills outdated sessions.
- 🛑 No More Manual Commands – Forget typing ssh -D 8181 apollo every time.

## 📥 How to Get ProxyToggle

- 💾 Visit the project on [ Github ](https://github.com/matthewshammond/ProxyToggle)

## 🔧 How to Install ProxyToggle (For Developers)

If you want to build ProxyToggle from source, here’s how:

### 1️⃣ Install Dependencies

Make sure you have Python 3.12+ installed. Then run:
`pip install -r requirements.txt`

### 2️⃣ Build the App

Run:
`pyinstaller --noconsole --onefile --windowed --name=ProxyToggle --icon=ProxyToggle.icns --add-data "ProxyToggle.icns:." proxy_toggle.py`

The app will be available in the dist/ folder.

### 3️⃣ Move to Applications Folder
`mv dist/ProxyToggle.app /Applications/`

### 🚀 How to Use ProxyToggle

🔹 Start ProxyToggle

You can manually start ProxyToggle from Terminal:
`/Applications/ProxyToggle.app/Contents/MacOS/ProxyToggle &`

Or, to keep it running even after closing Terminal:
`nohup /Applications/ProxyToggle.app/Contents/MacOS/ProxyToggle > /dev/null 2>&1 &`

🔹 Toggle Proxy

Click the menu bar icon to enable/disable the SOCKS proxy instantly.

🔹 Auto-Launch at Login
	1.	Open System Settings → General → Login Items.
	2.	Click + and select ProxyToggle.app.

### 🛠 Built With
	•	🐍 Python 3.12
	•	🖥 Rumps (macOS Menu Bar Framework)
	•	📦 PyInstaller (App Packaging)

### 📝 Future Features

💡 Status indicators for SSH connection
💡 Auto-detect network changes & re-enable proxy
💡 Customizable proxy & SSH settings
💡 Launch at startup & integrate with macOS plist


### 📜 License

ProxyToggle is open-source under the MIT License.
