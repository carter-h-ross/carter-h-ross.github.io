# -*- coding: utf-8 -*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
"""
Created on Wed Nov 16 16:44:25 2022

@author: Carter
"""

#--------------------------- modules ------------------------------------------

import numpy as np
import tkinter as tk
import tkinter
import random

#--------------------------- classes ------------------------------------------

class Spot:
    
    def __init__(self,r,c):
        self.r = r
        self.c = c
        self.count = 0
        self.direction = ""
        self.tail = False

#--------------------------- functions ----------------------------------------

def rgb_to_hex(rgb):
    return '%02x%02x%02x' % rgb

def draw():
    global GREEN, RED, GREY, DGREY, theme, board, laserColor
    for r in range(rows):
        for c in range(colls):
            if board[r,c].count > 0:
                if "g-" in theme:
                    if theme == "g-green-yellow":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(255-((board[r,c].count/length)*255)),255,0))
                    if theme == "g-green-cyan":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((0,255,round(255-((board[r,c].count/length)*255))))
                    if theme == "g-blue-cyan":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((0,round(255-((board[r,c].count/length)*255)),255))
                    if theme == "g-blue-magenta":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(255-((board[r,c].count/length)*255)),0,255))
                    if theme == "g-red-magenta":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((255,0,round(255-((board[r,c].count/length)*255))))
                    if theme == "g-red-yellow":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((255,round(255-((board[r,c].count/length)*255)),0))
                
                elif "g2-" in theme:
                    if theme == "g2-yellow-green":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(((board[r,c].count/length)*255)),255,0))
                    if theme == "g2-cyan-green":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((0,255,round(((board[r,c].count/length)*255))))
                    if theme == "g2-cyan-blue":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((0,round(((board[r,c].count/length)*255)),255))
                    if theme == "g2-magenta-blue":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(((board[r,c].count/length)*255)),0,255))
                    if theme == "g2-magenta-red":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((255,0,round(((board[r,c].count/length)*255))))
                    if theme == "g2-yellow-red":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((255,round(((board[r,c].count/length)*255)),0))
                
                elif "cb-" in theme:
                    if theme == "cb-green-black":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((0,round(((board[r,c].count/length)*255)),0))
                    if theme == "cb-blue-black":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((0,0,round(((board[r,c].count/length)*255))))
                    if theme == "cb-red-black":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(((board[r,c].count/length)*255)),0,0))
                    if theme == "cb-yellow-black":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(((board[r,c].count/length)*255)),round(((board[r,c].count/length)*255)),0))
                    if theme == "cb-magenta-black":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(((board[r,c].count/length)*255)),0,round(((board[r,c].count/length)*255))))
                    if theme == "cb-cyan-black":    
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((0,round(((board[r,c].count/length)*255)),round(((board[r,c].count/length)*255))))
                
                elif "cw-" in theme:
                    if theme == "cw-green-white":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(255-((board[r,c].count/length)*255)),255,round(255-((board[r,c].count/length)*255))))
                    if theme == "cw-blue-white":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(255-((board[r,c].count/length)*255)),round(255-((board[r,c].count/length)*255)),255))
                    if theme == "cw-red-white":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((255,round(255-((board[r,c].count/length)*255)),round(255-((board[r,c].count/length)*255))))
                    if theme == "cw-yellow-white":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((255,255,round(255-((board[r,c].count/length)*255))))
                    if theme == "cw-magenta-white":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((255,round(255-((board[r,c].count/length)*255)),255))
                    if theme == "cw-cyan-white":    
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(255-((board[r,c].count/length)*255)),255,255))
                
                elif "gp-" in theme:
                    if theme == "gp-green-blue":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(255-((board[r,c].count/length)*255)),round(((board[r,c].count/length)*255)),0))
                    if theme == "gp-green-red":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((0,round(((board[r,c].count/length)*255)),round(255-((board[r,c].count/length)*255))))
                    if theme == "gp-blue-green":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((0,round(255-((board[r,c].count/length)*255)),round(((board[r,c].count/length)*255))))
                    if theme == "gp-blue-red":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(255-((board[r,c].count/length)*255)),0,round(((board[r,c].count/length)*255))))
                    if theme == "gp-red-green":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(((board[r,c].count/length)*255)),round(255-((board[r,c].count/length)*255)),0))
                    if theme == "gp-red-blue":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(((board[r,c].count/length)*255)),0,round(255-((board[r,c].count/length)*255))))
                
                elif "gs-" in theme: 
                    if theme == "gs-yellow-cyan":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(((board[r,c].count/length)*255)),255,round(255-((board[r,c].count/length)*255))))
                    if theme == "gs-yellow-magenta":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((255,round(((board[r,c].count/length)*255)),round(255-((board[r,c].count/length)*255))))
                    if theme == "gs-magenta-yellow":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((255,round(255-((board[r,c].count/length)*255)),round(((board[r,c].count/length)*255))))
                    if theme == "gs-magenta-cyan":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(((board[r,c].count/length)*255)),round(255-((board[r,c].count/length)*255)),255))
                    if theme == "gs-cyan-yellow":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(255-((board[r,c].count/length)*255)),255,round(((board[r,c].count/length)*255))))
                    if theme == "gs-cyan-magenta":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(255-((board[r,c].count/length)*255)),round(((board[r,c].count/length)*255)),255))
                
                elif "go-" in theme:
                    if theme == "go-red-cyan":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(((board[r,c].count/length)*255)),round(255-((board[r,c].count/length)*255)),round(255-((board[r,c].count/length)*255))))
                    if theme == "go-green-magenta":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(255-((board[r,c].count/length)*255)),round(((board[r,c].count/length)*255)),round(255-((board[r,c].count/length)*255))))
                    if theme == "go-blue-yellow":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(255-((board[r,c].count/length)*255)),round(255-((board[r,c].count/length)*255)),round(((board[r,c].count/length)*255))))
                    if theme == "go-cyan-red":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(255-((board[r,c].count/length)*255)),round(((board[r,c].count/length)*255)),round(((board[r,c].count/length)*255))))
                    if theme == "go-magenta-green":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(((board[r,c].count/length)*255)),round(255-((board[r,c].count/length)*255)),round(((board[r,c].count/length)*255))))
                    if theme == "go-yellow-blue":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((round(((board[r,c].count/length)*255)),round(((board[r,c].count/length)*255)),round(255-((board[r,c].count/length)*255))))
                
                elif "r-" not in theme:
                    if theme == "green":
                        tiles[r,c]["bg"] = "#00ff00"
                    if theme == "blue":
                        tiles[r,c]["bg"] = "#0000ff"
                    if theme == "red":
                        tiles[r,c]["bg"] = "#ff0000"
                    if theme == "yellow":
                        tiles[r,c]["bg"] = "#ffff00"
                    if theme == "magenta":
                        tiles[r,c]["bg"] = "#ff00ff"
                    if theme == "cyan":
                        tiles[r,c]["bg"] = "#00ffff"
                    if theme == "black":
                        tiles[r,c]["bg"] = "#000000"
                        
                else:
                    if theme == "r-all":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((random.randint(0, 255),random.randint(0, 255),random.randint(0, 255)))
                    if theme == "r-green":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex(0,random.randint(0, 255),0)
                    if theme == "r-blue":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((0,0,random.randint(0, 255)))
                    if theme == "r-red":
                        tiles[r,c]["bg"] = "#" + rgb_to_hex((random.randint(0, 255),0,0))
                    
                    
                    
            elif board[r,c].count == 0:
                tiles[r,c]["bg"] = GREY
            elif board[r,c].count == -10:
                tiles[r,c]["bg"] = DGREY
            elif board[r,c].count == -15:
                tiles[r,c]["bg"] = laserColor
            else:
                tiles[r,c]["bg"] = RED
    
def newAppleLoc(op=" "):
    global rows, colls, board, appleR, appleC, applesNum, appleLocs
    
    if "multiple-apples" not in mode:
        while True:
            newR = random.randint(0,rows-1)
            newC = random.randint(0, colls-1)   
            if board[newR,newC].count == 0:
                board[newR,newC].count = -5
                appleR, appleC = newR, newC
                break
    else:
        while True:
            newR = random.randint(0,rows-1)
            newC = random.randint(0, colls-1)   
            if board[newR,newC].count == 0:
                board[newR,newC].count = -5
                appleLocs[int(op),0], appleLocs[int(op),1] = newR, newC
                break
            
def laser(op =""):
    global laserOn, turned
    laserOn = True

def up(op=""):
    global direction, turned
    if direction != "down" and not turned:
        direction = "up"
        turned = True
        
def down(op=""):
    global direction, turned
    if direction != "up" and not turned:
        direction = "down"
        turned = True

def right(op=""):
    global direction, turned
    if direction != "left" and not turned:
        direction = "right"
        turned = True

def left(op=""):
    global direction, turned
    if direction != "right" and not turned:
        direction = "left"
        turned = True

def update(op=""):
    global length, playerR, playerC, board, direction, appleR, appleC, done, speed, tailR, tailC, rows, colls, score, mode, appleLocs, lastTailR, lastTailC, laserOn, laserDeath, turned
    
#-------------------------- regular mode --------------------------------------
    
    turned = False
    
    if mode == "regular":
        if not done:
            if playerR == appleR and playerC == appleC:  
                score += 1
                tiles[1,rows]["text"] = score
                for r in range(rows):
                    for c in range(colls):
                        if board[r,c].count > 0:
                            board[r,c].count += 1
                board[tailR,tailC].count = 1
                length += 1
                newAppleLoc()
                        
            if playerC != colls-1:
                if direction == "right" and board[playerR,playerC+1].count <1:#flip these
                    board[playerR,playerC+1].count = length
                    playerC += 1 
                elif direction == "right" and board[playerR,playerC+1].count >1:
                    done = True
            elif direction == "right" and playerC == colls-1:
                done = True
                
            if playerC!= 0:
                if direction == "left" and board[playerR,playerC-1].count <1:     
                    board[playerR,playerC-1].count = length
                    playerC -= 1
                elif direction == "left" and board[playerR,playerC-1].count >1:
                    done = True
            elif direction == "left" and playerC == 0:
                done = True
                
            if playerR != 0:
                if direction == "up" and board[playerR-1,playerC].count <1:
                    board[playerR-1,playerC].count = length
                    playerR -= 1
                elif direction == "up" and board[playerR-1,playerC].count >1:
                    done = True
            elif direction == "up" and playerR == 0:
                done = True
                
            if playerR != rows-1:
                if direction == "down" and board[playerR+1,playerC].count <1:
                    board[playerR+1,playerC].count = length
                    playerR += 1
                elif direction == "down" and board[playerR+1,playerC].count >1:
                    done = True
            elif direction == "down" and playerR == rows-1:
                done = True
                
            for r in range(rows):
                for c in range(colls):
                    if board[r,c].count == 1:
                        tailR = r
                        tailC = c 
           
            if not done:
                draw()
            
                for r in range(rows):
                    for c in range(colls):
                        if board[r,c].count > 0:
                            board[r,c].count -= 1  
                
                window.after(speed, update) 

#--------------------------- multiple apples mode -----------------------------  

    if "multiple-apples" in mode:
        if not done:
            for i in range(len(appleLocs)):
                if playerR == appleLocs[i,0] and playerC == appleLocs[i,1]:  
                    score += 1
                    tiles[1,rows]["text"] = score
                    for r in range(rows):
                        for c in range(colls):
                            if board[r,c].count > 0:
                                board[r,c].count += 1
                    board[tailR,tailC].count = 1
                    length += 1
                    newAppleLoc(i)
                            
            if playerC != colls-1:
                if direction == "right" and board[playerR,playerC+1].count <1:
                    board[playerR,playerC+1].count = length
                    playerC += 1
                elif direction == "right" and board[playerR,playerC+1].count >1:
                    done = True
            elif direction == "right" and playerC == colls-1:
                done = True
                
            if playerC!= 0:
                if direction == "left" and board[playerR,playerC-1].count <1:     
                    board[playerR,playerC-1].count = length
                    playerC -= 1
                elif direction == "left" and board[playerR,playerC-1].count >1:
                    done = True
            elif direction == "left" and playerC == 0:
                done = True
                
            if playerR != 0:
                if direction == "up" and board[playerR-1,playerC].count <1:
                    board[playerR-1,playerC].count = length
                    playerR -= 1
                elif direction == "up" and board[playerR-1,playerC].count >1:
                    done = True
            elif direction == "up" and playerR == 0:
                done = True
                
            if playerR != rows-1:
                if direction == "down" and board[playerR+1,playerC].count <1:
                    board[playerR+1,playerC].count = length
                    playerR += 1
                elif direction == "down" and board[playerR+1,playerC].count >1:
                    done = True
            elif direction == "down" and playerR == rows-1:
                done = True
                
            for r in range(rows):
                for c in range(colls):
                    if board[r,c].count == 1:
                        tailR = r
                        tailC = c 
           
            if not done:
                draw()
            
                for r in range(rows):
                    for c in range(colls):
                        if board[r,c].count > 0:
                            board[r,c].count -= 1  
                
                window.after(speed, update)
    
#------------------------- walls mode -----------------------------------------

    if mode == "walls":
        if not done:
            if playerR == appleR and playerC == appleC:  
                score += 1
                tiles[1,rows]["text"] = score
                for r in range(rows):
                    for c in range(colls):
                        if board[r,c].count > 0:
                            board[r,c].count += 1
                board[tailR,tailC].count = 1
                length += 1
                newAppleLoc()
                board[lastTailR,lastTailC].count = -10
                        
            if playerC != colls-1:
                if direction == "right" and board[playerR,playerC+1].count <1:
                    if board[playerR,playerC+1].count != -10:
                        board[playerR,playerC+1].count = length
                        playerC += 1 
                    else:
                        done = True
                elif direction == "right" and board[playerR,playerC+1].count >1:
                    done = True
            elif direction == "right" and playerC == colls-1:
                done = True
                
            if playerC!= 0:
                if direction == "left" and board[playerR,playerC-1].count <1:
                    if board[playerR,playerC-1].count != -10:
                        board[playerR,playerC-1].count = length
                        playerC -= 1
                    else:
                        done = True
                elif direction == "left" and board[playerR,playerC-1].count >1:
                    done = True
            elif direction == "left" and playerC == 0:
                done = True
                
            if playerR != 0:
                if direction == "up" and board[playerR-1,playerC].count <1:
                    if board[playerR-1,playerC].count != -10:
                        board[playerR-1,playerC].count = length
                        playerR -= 1
                    else:
                        done = True
                elif direction == "up" and board[playerR-1,playerC].count >1:
                    done = True
            elif direction == "up" and playerR == 0:
                done = True
                
            if playerR != rows-1:
                if direction == "down" and board[playerR+1,playerC].count <1:
                    if board[playerR+1,playerC].count != -10:
                        board[playerR+1,playerC].count = length
                        playerR += 1
                    else:
                        done = True
                elif direction == "down" and board[playerR+1,playerC].count >1:
                    done = True
            elif direction == "down" and playerR == rows-1:
                done = True
                
            lastTailR, lastTailC = tailR, tailC
            for r in range(rows):
                for c in range(colls):
                    if board[r,c].count == 1:
                        tailR = r
                        tailC = c 
           
            if not done:
                draw()
            
                for r in range(rows):
                    for c in range(colls):
                        if board[r,c].count > 0:
                            board[r,c].count -= 1  
                
                window.after(speed, update)

    nums()
    
#-------------------------- laser mode ----------------------------------------
    
    if "lasergun-" in mode:
        if not done:
            
            for r in range(rows):
                for c in range(colls):
                    if board[r,c].count == -15:
                        board[r,c].count = 0
            
            if playerR == appleR and playerC == appleC:  
                score += 1
                tiles[1,rows]["text"] = score
                for r in range(rows):
                    for c in range(colls):
                        if board[r,c].count > 0:
                            board[r,c].count += 1
                board[tailR,tailC].count = 1
                length += 1
                newAppleLoc()
            
            if direction == "right" and laserOn == True:
                for c in range(playerC+2,colls):
                    if board[playerR,c].count < 1:
                        board[playerR,c].count = -15    
                    else:
                        done = True
                        laserDeath = True
                        board[playerR,playerC+1].count = -15
            if laserOn == True and direction == "right" and appleR == playerR and appleC > playerC:
                score += 1
                tiles[1,rows]["text"] = score
                for r in range(rows):
                    for c in range(colls):
                        if board[r,c].count > 0:
                            board[r,c].count += 1
                        elif board[r,c].count == -5:
                            board[r,c].count = 0
                board[tailR,tailC].count = 1
                length += 1
                newAppleLoc()
                
            if direction == "left" and laserOn == True:
                for c in range(playerC-2,-1,-1):
                    if board[playerR,c].count < 1:
                        board[playerR,c].count = -15
                    else:
                        done = True
                        laserDeath = True
                        board[playerR,playerC-1].count = -15
            if laserOn == True and direction == "left" and appleR == playerR and appleC < playerC:
                score += 1
                tiles[1,rows]["text"] = score
                for r in range(rows):
                    for c in range(colls):
                        if board[r,c].count > 0:
                            board[r,c].count += 1
                        elif board[r,c].count == -5:
                            board[r,c].count = 0
                board[tailR,tailC].count = 1
                length += 1
                newAppleLoc()
                
            if direction == "down" and laserOn == True:
                for r in range(playerR+2,colls):
                    if board[r,playerC].count < 1:
                        board[r,playerC].count = -15      
                    else:
                        done = True
                        laserDeath = True
                        board[playerR+1,playerC].count = -15
            if laserOn == True and direction == "down" and appleC == playerC and appleR > playerR:
                score += 1
                tiles[1,rows]["text"] = score
                for r in range(rows):
                    for c in range(colls):
                        if board[r,c].count > 0:
                            board[r,c].count += 1
                        elif board[r,c].count == -5:
                            board[r,c].count = 0
                board[tailR,tailC].count = 1
                length += 1
                newAppleLoc()
                
            if direction == "up" and laserOn == True:
                for r in range(playerR-2,-1,-1):
                    if board[r,playerC].count < 1:
                        board[r,playerC].count = -15
                    else: 
                        done = True
                        laserDeath = True
                        board[playerR-1,playerC].count = -15
            if laserOn == True and direction == "up" and appleC == playerC and appleR < playerR:
                score += 1
                tiles[1,rows]["text"] = score
                for r in range(rows):
                    for c in range(colls):
                        if board[r,c].count > 0:
                            board[r,c].count += 1
                        elif board[r,c].count == -5:
                            board[r,c].count = 0
                board[tailR,tailC].count = 1
                length += 1
                newAppleLoc()
            
            if laserDeath == True:
                draw()
                        
            if playerC != colls-1:
                if direction == "right" and board[playerR,playerC+1].count <1:#flip these
                    board[playerR,playerC+1].count = length
                    playerC += 1 
                elif direction == "right" and board[playerR,playerC+1].count >1:
                    done = True
            elif direction == "right" and playerC == colls-1:
                done = True
                
            if playerC!= 0:
                if direction == "left" and board[playerR,playerC-1].count <1:     
                    board[playerR,playerC-1].count = length
                    playerC -= 1
                elif direction == "left" and board[playerR,playerC-1].count >1:
                    done = True
            elif direction == "left" and playerC == 0:
                done = True
                
            if playerR != 0:
                if direction == "up" and board[playerR-1,playerC].count <1:
                    board[playerR-1,playerC].count = length
                    playerR -= 1
                elif direction == "up" and board[playerR-1,playerC].count >1:
                    done = True
            elif direction == "up" and playerR == 0:
                done = True
                
            if playerR != rows-1:
                if direction == "down" and board[playerR+1,playerC].count <1:
                    board[playerR+1,playerC].count = length
                    playerR += 1
                elif direction == "down" and board[playerR+1,playerC].count >1:
                    done = True
            elif direction == "down" and playerR == rows-1:
                done = True
                
            for r in range(rows):
                for c in range(colls):
                    if board[r,c].count == 1:
                        tailR = r
                        tailC = c 
           
            if not done:
                draw()
            
                for r in range(rows):
                    for c in range(colls):
                        if board[r,c].count > 0:
                            board[r,c].count -= 1  
                laserOn = False
                
                window.after(speed, update)
        
def nums(op=""):
    global rows, colls, board, boardNums
    boardNums = {"main" : np.array(0)}
    boardNums["main"].resize(rows,colls)
    for r in range(rows):
        for c in range(colls):
            boardNums["main"][r,c] = board[r,c].count

#--------------------------- inputs -------------------------------------------

choice = input("do you want the default settings ( y or n ): ")
if choice == "y":
    rows = 20
    colls = 20
    speed = 150
    theme = "green"
    mode = "regular"
elif choice == "n":
    while True:
        rows = int(input("enter number of rows on the board: "))
        colls = int(input("enter number of columns on the board: "))
        speed = 1000-(int(input("enter the speed of the snake default is 85 and max is 99: "))*10)
        themes = ["basic themes:",
                  "green",
                  "blue",
                  "red",
                  "yellow",
                  "magenta",
                  "cyan",
                  "black",
                  " ",
                  "color to black gradients:",
                  "cb-green-black",
                  "cb-blue-black",
                  "cb-red-black",
                  "cb-yellow-black",
                  "cb-magenta-black",
                  "cb-cyan-black",
                  " ",
                  "color to white gradients:",
                  "cw-green-white",
                  "cw-blue-white",
                  "cw-red-white",
                  "cw-yellow-white",
                  "cw-magenta-white",
                  "cw-cyan-white",
                  " ",
                  "randomized themes:",
                  "r-all",
                  "r-green",
                  "r-blue",
                  "r-red",
                  " ",
                  "primary color gradients:",
                  "g-green-yellow",
                  "g-green-cyan",
                  "g-blue-cyan",
                  "g-blue-magenta",
                  "g-red-magenta",
                  "g-red-yellow",
                  " ",
                  "secondary color gradients:",
                  "g2-yellow-green",
                  "g2-cyan-green",
                  "g2-cyan-blue",
                  "g2-magenta-blue",
                  "g2-magenta-red",
                  "g2-yellow-red",
                  " ",
                  "primary to primary color gradients:",
                  "gp-green-blue",
                  "gp-green-red",
                  "gp-blue-green",
                  "gp-blue-red",
                  "gp-red-green",
                  "gp-red-blue",
                  " ",
                  "secondary to secondary color gradients:",
                  "gs-yellow-cyan",
                  "gs-yellow-magenta",
                  "gs-magenta-yellow",
                  "gs-magenta-cyan",
                  "gs-cyan-yellow",
                  "gs-cyan-magenta",
                  " ",
                  "go-opposite color gradients:",
                  "go-red-cyan",
                  "go-green-magenta",
                  "go-blue-yellow",
                  "go-cyan-red",
                  "go-magenta-green",
                  "go-yellow-blue"]
        
        print("\nthe themes to use are: ")
        for i in range(len(themes)):
            print(themes[i])
        theme = input("\nenter the themes from the list of themes: ")
        
        modes = ["\nmodes to choose from:",
                 "regular",
                 "multiple-apples-#",
                 "walls",
                 "lasergun-COLOR (RED, GREEN, BLUE, YELLOW, CYAN, MAGENTA, RAND)"]
        
        for i in range(len(modes)):
            print(modes[i])
        mode = input("\nenter the game mode you want to play: ")
        if "multiple-apples" in mode:
            modeLst = mode
            modeLst = modeLst.split("-")
            applesNum = int(modeLst[2])
        if "lasergun-" in mode:
            colors = { "RED" : "#FF0000",
                       "GREEN" : "#00FF00",
                       "BLUE" : "#0000FF",
                       "YELLOW" : "#FFFF00",
                       "CYAN" : "#00FFFF",
                       "MAGENTA" : "#FF00FF",
                       "RAND" : "#" + rgb_to_hex((random.randint(0,255),random.randint(0,255),random.randint(0,255)))}
            modeLst = mode
            modeLst = modeLst.split("-")
            laserColor = colors[modeLst[1]]    
                    
        if theme not in themes:
            print("theme is not a valid theme and or game mode restart process")
            
        break
elif "dylan" in choice:
    dylan = {
        "laser" : [20,20,92,"cw-cyan-white","lasergun-GREEN"],
        "walls" : [20,20,92,"cw-cyan-white","walls"],
        "fun": [6,50,99,"g2-yellow-green","walls"]}
    
    preset = choice.split("-")
    preset = preset[1]
    rows = dylan[preset][0]
    colls = dylan[preset][1]
    speed = dylan[preset][2]
    theme = dylan[preset][3]
    mode = dylan[preset][4]
    
    if "multiple-apples" in mode:
        modeLst = mode
        modeLst = modeLst.split("-")
        applesNum = int(modeLst[2])
    if "lasergun-" in mode:
        colors = { "RED" : "#FF0000",
                   "GREEN" : "#00FF00",
                   "BLUE" : "#0000FF",
                   "YELLOW" : "#FFFF00",
                   "CYAN" : "#00FFFF",
                   "MAGENTA" : "#FF00FF",
                   "RAND" : "#" + rgb_to_hex((random.randint(0,255),random.randint(0,255),random.randint(0,255)))}
        modeLst = mode
        modeLst = modeLst.split("-")
        laserColor = colors[modeLst[1]]
    
else:
    choices = choice.split(",")
    rows = int(choices[0])
    colls = int(choices[1])
    speed = int(choices[2])
    theme = choices[3]  
    mode = choices[4]     
    if "multiple-apples" in mode:
        modeLst = mode
        modeLst = modeLst.split("-")
        applesNum = int(modeLst[2])
    if "lasergun-" in mode:
        colors = { "RED" : "#FF0000",
                   "GREEN" : "#00FF00",
                   "BLUE" : "#0000FF",
                   "YELLOW" : "#FFFF00",
                   "CYAN" : "#00FFFF",
                   "MAGENTA" : "#FF00FF",
                   "RAND" : "#" + rgb_to_hex((random.randint(0,255),random.randint(0,255),random.randint(0,255)))}
        modeLst = mode
        modeLst = modeLst.split("-")
        laserColor = colors[modeLst[1]] 

#--------------------------- variables ----------------------------------------

window = tk.Tk()

RED = "#FF0000"
GREEN = "#00FF00"
BLUE = "#0000FF"
YELLOW = "#FFFF00"
CYAN = "#00FFFF"
MAGENTA = "#FF00FF"
GREY = "#DFDFDF"
DGREY = "#A8A8A8"

board = np.array([Spot(0,0)])
board.resize(rows,colls)
tiles = np.array([tk.Button(master = window, width = 2, bg = GREY)])
tiles.resize(rows,colls+1)
playerR = int(round((rows-1)/2))
playerC = int(round((colls-1)/2))
appleR = playerR
appleC = playerC + round(1/4*(colls))
tailR, tailC = 0,0
lastTailR, lastTailC = 0,0
done = False
laserOn = False
laserDeath = False
turned = False

for r in range(rows):
    for c in range(colls):
        board[r,c] = Spot(r,c)
        tiles[r,c] = tk.Button(master = window, width = 2, bg = GREY)
        tiles[r,c].grid(row = r,column = c)

infoW = 15
score = 0
tiles[0,rows] = tk.Button(master = window, width = infoW, bg = GREY, text = "Score:")
tiles[1,rows] = tk.Button(master = window, width = infoW, bg = GREY, text = score)
tiles[2,rows] = tk.Button(master = window, width = infoW, bg = GREY, text = "Theme:")
tiles[3,rows] = tk.Button(master = window, width = infoW, bg = GREY, text = theme)
tiles[4,rows] = tk.Button(master = window, width = infoW, bg = GREY, text = "Mode:")
tiles[5,rows] = tk.Button(master = window, width = infoW, bg = GREY, text = mode)
tiles[0,rows].grid(row = 0, column = colls)
tiles[1,rows].grid(row = 1, column = colls)
tiles[2,rows].grid(row = 2, column = colls)
tiles[3,rows].grid(row = 3, column = colls)
tiles[4,rows].grid(row = 4, column = colls)
tiles[5,rows].grid(row = 5, column = colls)

length = 2
direction = "r"
board[playerR,playerC].count = 2
board[playerR,playerC].count = 1

board[appleR,appleC].count = -5
if "multiple-apples" in mode:
    appleLocs = np.array([[0,0]])
    appleLocs.resize(applesNum,2)
    for i in range(applesNum-1):
        newAppleLoc(i)
    appleLocs[applesNum-1,0], appleLocs[applesNum-1,1] = appleR, appleC
    

sizeH = 26
sizeW = 24
W = colls * sizeW
H = rows * sizeH

#-------------------------- call functions ------------------------------------

window.bind("<Up>",up)
window.bind("<w>",up)
window.bind("<Down>",down)
window.bind("<s>",down)
window.bind("<Right>",right)
window.bind("<d>",right)
window.bind("<Left>",left)
window.bind("<l>",left)
window.bind("<space>",update)
window.bind("<Shift_L>",laser)
window.bind("<Shift_R>",laser)
window.bind("<p>",nums)

right()
window.title("Snake")
window.geometry(f"{W+115}x{H}")
window.mainloop()