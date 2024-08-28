---
title: "Mac Network Cli Snippets"
date: 2023-01-11
url: /mac-network-cli-snippets/
image: images/tux_apple.png
draft: false
author: "Matt Hammond"
description: "Collection of network code terminal snippets for macOS."
---

## ipconfig

- get `ip address`

```bash
ipconfig getifaddr en0
```

- get `subnet mask`

```bash
ipconfig getoption en0 subnet_mask
```

- get `dns server`

```bash
ipconfig getoption en0 domain_name_server
```

- get `info about how en0 got its dhcp on`

```bash
ipconfig getpacket en0
```

- renew dhcp lease

```bash
ipconfig set en0 DHCP

# or this
ipconfig set en1 BOOTP && ipconfig set en1 DHCP
ifconfig en1 down && ifconfig en1 up
```

- set a specific ip address

```bash
ipconfig set en0 INFORM 192.168.1.160
```

## ifconfig

- get `network info`

```bash
ifconfig en0
```

- set `ip address` and `netmask`

```bash
ifconfig en0 inet 192.168.1.154 netmask 255.255.255.0
```

- renew `dhcp leases`

```bash
ipconfig set en0 BOOTP && ipconfig set en0 DHCP
ifconfig en0 down && ifconfig en0 up
```

## networksetup

- get a list of `location` on the computer

```bash
networksetup -listlocations
```

- get `active location`

```bash
networksetup -getcurrentlocation
```

- config manual `static ip address`

```bash
networksetup -setmanual Wi-Fi 192.168.1.154 255.255.255.0 192.168.1.253
```

- config `dns server`

```bash
networksetup -setdnsservers Wi-Fi 192.168.1.154 192.168.1.253
```

- get `dns server`

```bash
networksetup -getdnsservers Wi-Fi
```

## firewall

- stop the application layer firewall

```bash
launchctl unload /System/Library/LaunchAgents/com.apple.alf.useragent.plist
launchctl unload /System/Library/LaunchAgents/com.apple.alf.agent.plist
```

- start the application layer firewall

```bash
launchctl load /System/Library/LaunchAgents/com.apple.alf.agent.plist
launchctl load /System/Library/LaunchAgents/com.apple.alf.useragent.plist
```

- allow an app to communicate outside through the application layer firewall

```bash
socketfilterfw -t "/Applications/..."
```

## route

- routing table

```bash
netstat -nr
```

- add a route

```bash
# so that traffice for 192.168.1.0/24
# communicates over the 192.168.1.253
sudo route -n add 192.168.1.0/24 192.168.1.253
```

- delete a route

```bash
sudo route -n delete 192.168.1.0/24 192.168.1.253
```

## netstat

- view info on all sockets

```bash
netstat -at
```

- network info for ipv6

```bash
netstat -lt
```

- per protocol network statistics

```bash
netstat -s
```

- statistics for a specific network protocol

```bash
netstat -p igmp
```

- statistics for network interfaces

```bash
netstat -i
```

- view network info as it happens

```bash
ntop
```

## ping

- put a delay in pings

```bash
ping -i 5 192.168.1.253
```

- ping hostname 5 times and then stop

```bash
ping -c 5 192.168.1.253
```

- flood ping the host

```bash
ping -f location
```

- set packet size during ping

```bash
ping -s 100 192.168.1.253
```

- customize source ip during ping

```bash
ping -S 192.168.1.160 192.168.1.253
```

## trace

- trace the path packets go through

```bash
traceroute baidu.com
```

- without looking up names

```bash
traceroute -n baidu.com
```

- in debug mode

```bash
traceroute -d baidu.com
```

## nc

- establish a network connection

```bash
nc -v baidu.com 80
```

- establish a network connection over port 2195

```bash
nc -v -w 15 baidu.com 2196
```

- establish a network connection only allowing ipv4

```bash
nc -v -4 baidu.com 2196
```

- setup a network listener on port 2196 for testing

```bash
nc -l -p 2196
```

## tcpdump

- capture some packets

```bash
tcpdump -nS
```

- capture all packets

```bash
tcpdump -nnvvXS
```

- capture packets for port

```bash
tcpdump -nnvvXs 548
```

- capture all packets for a given port going to destination 192.168.1.160

```bash
tcpdump -nnvvXs 548 dst 192.168.1.160
```

- capture packets as above but dump to a pcap file

```bash
tcpdump -nnvvXs 548 dst 192.168.1.160 -w /tmp/demo.pcap
```

- read tcpdump (cap) files and make them human readable

```bash
tcpdump -qns 0 -A -r /tmp/demo.pcap
```

## other

- flush the dns cache

```bash
dscacheutil -flushcache
```

- clear arp cache

```bash
arp -ad
```

- what binaries have what ports and in what states are those ports

```bash
lsof -n -i4TCP
```

- make an alias for looking at what has a listener open, called ports

```bash
alias ports='lsof -n -i4TCP | grep LISTEN'
```

- edit hosts file

```bash
sudo vim /private/etc/hosts
```
