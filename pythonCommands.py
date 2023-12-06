# -*- coding: utf-8 -*-
"""
Created on Tue Dec  5 17:29:09 2023

@author: Carter
"""

import os

def shutdown():
    os.system("shutdown /s /t 1")
    
def restart():
    os.system("shutdown /r /t 0")
    
def logOut():
    os.system("rundll32.exe user32.dll, LockWorkStation")

# force shutdown with a pop-up window and delayed shutdown
def shutdownWithMessage(message, seconds):
    os.system(f"shutdown -s -f -t {seconds} -c {message}")
    
def screenBrightness(level):
    os.system(f"powershell (Get-WmiObject -Namespace root/WMI -Class WmiMonitorBrightnessMethods).WmiSetBrightness(1,${level})")
    
# print list of ips connected to local network
def printLocalIPs():
    os.system("arp -a")
    
# print info of current computer
def printMyInfo():
    os.system("ipconfig/all")    
        
# must have windows 10 pro, sends message to all computers
def message(msg):
    os.system(f"msg * {msg}")
    
def openWebsite(link, repeat):
    for i in range(repeat):
        os.system(f"start chrome {link}")

def openWindow(repeat):
    for i in range(repeat):
        os.system("start cmd")
