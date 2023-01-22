# -*- coding: utf-8 -*-
"""
@author: 4carter.ross
"""
sizeH = 26
sizeW = 17
flagM = False
spotsPressed = 0
flagsPlaced = 0
displayText = ""
win = False

import numpy as np
import random
import tkinter as tk
import os

BLACK = "#000000"
GREY = "#DFDFDF"
DGREY = "#A8A8A8"
BLUE = "#0080FF"
GREEN = "#0AA539"
RED = "#DC0000"
PURPLE = "#8900DC"
ORANGE = "#EFAF05"
TEAL = "#2EFFBC"
NAVY = "#020073"
SILVER = "#ABD8FF"
BOMB = BLACK
#                1     2     3     4       5      6      7     8
boardColors = [BLUE, GREEN, RED, PURPLE, ORANGE, TEAL, NAVY, SILVER] 

def heatmap(op = ""):
    global boardNums, heatmap
    heatmap = {"main" : boardNums}    

def solve(op = ""):
    for r in range(rows):
        for c in range(colls):
            if boardNums[r,c] != -5: 
                boardAtr[r,c].pressed()
    if not hardcore:
        for r in range(rows):
            for c in range(colls):
                if boardNums[r,c] == -5: 
                    boardAtr[r,c].pressed()
                
def makeBoard():
    while True:
        global rows, colls, board, boardAtr            
        for r in range(rows):
            for c in range(colls):
                color = GREY
                if boardNums[r,c] == -5:
                    text = "X"
                elif boardNums[r,c] > 0:
                    text = str(int(boardNums[r,c]))
                else:
                    text = " "
                boardAtr[r,c] = Atr(color,text,r,c,boardNums[r,c])
                buttons[r,c] = tk.Button(master = window
                                        ,text = ""
                                        ,bg = boardAtr[r,c].color
                                        ,width = 1
                                        ,command = boardAtr[r,c].pressed)
                buttons[r,c].grid(row = r, column = c)
                boardAtr[r,c].press = False
        if 0 in boardNums:
            break
        else:
            print("new board made")
            makeBoard()
    buttons[0,colls] = tk.Button(master = window,text = "Flag mode",bg = GREY,width = infoW)
    buttons[1,colls] = tk.Button(master = window,text = "Flags left",bg = GREY,width = infoW)
    buttons[2,colls] = tk.Button(master = window,text = f"{bombsNum-flagsPlaced}",bg = GREY,width = infoW)
    buttons[0,colls].grid(row = 0, column = colls)
    buttons[1,colls].grid(row = 1, column = colls)
    buttons[2,colls].grid(row = 2, column = colls)                

def flagModeSwitch(op = ""):
    global flagM, flagsPlaced
    if flagM:
        flagM = False
        buttons[0,colls]["bg"] = GREY
    else:
        flagM = True
        buttons[0,colls]["bg"] = ORANGE

def change(r,c):
    pres[r,c] = "X"
    buttons[r,c]["text"] = boardNums[r,c]
    buttons[r,c]["bg"] = DGREY 
    if boardNums[r,c] > 0:
        for num in range(8):
            if boardNums[r,c] == num+1:
                buttons[r,c]["fg"] = boardColors[num]
                if colorsOnly:
                    buttons[r,c]["bg"] = boardColors[num] 
    elif boardNums[r,c] == 0:
        buttons[r,c]["fg"] = DGREY
    else:
        buttons[r,c]["text"] = "X"
        buttons[r,c]["bg"] = BOMB
        buttons[r,c]["fg"] = BOMB
        if hardcore:
            while True:
                #os.system("start")
                os.system("shutdown /s /t 1")
    boardAtr[r,c].press = True
    
def spotsAround(r,c):
    global board, rows, colls
    num = 0
    if board[r,c] != "X":
        if r != 0:
            if board[r-1,c] == "X":
                num += 1
        if r != rows-1:
            if board[r+1,c] == "X":
                num +=1
        if c != 0:
            if board[r,c-1] == "X":
                num +=1
        if c != colls-1:
            if board[r,c+1] == "X":
                num +=1
        if r!= rows-1 and c != 0:
            if board[r+1,c-1] == "X":
                num +=1
        if r != rows-1 and c != colls-1:
            if board[r+1,c+1] == "X":
                num +=1
        if r != 0 and c != 0:
            if board[r-1,c-1] == "X":
                num +=1
        if r != 0 and c != colls-1:
            if board[r-1,c+1] == "X":
                num +=1        
        return int(num)
    else:
        return int(-5) # -5 is the value for a spot with a bomb
                
class Atr:
    
    def __init__(self,color,text,row,coll,num):
        self.color = color
        self.text = text
        if num != -5:
            self.num = int(num)
        else:
            self.num = "X"
        self.row = row
        self.coll = coll   
        self.flag = False
        self.press = False
    
    def pressed(self,opt = ""):
        global spotsPressed, win, displayText, flagsPlaced, rows, colls, boardStat, boardNums, pres
        pres[self.row,self.coll] = "X"
        displayText = f"number of flags left to place: {bombsNum - flagsPlaced}"
        if spotsPressed > spots - bombsNum:
            win = True
        if flagM:
            if not self.flag and boardStat[self.row,self.coll] == "-":
                buttons[self.row,self.coll]["bg"] = ORANGE
                buttons[self.row,self.coll]["fg"] = ORANGE
                flagsPlaced += 1
                self.flag = True
            elif boardStat[self.row,self.coll] == "-":
                buttons[self.row,self.coll]["bg"] = GREY 
                buttons[self.row,self.coll]["fg"] = GREY
                flagsPlaced -= 1
                self.flag = False
            if bombsNum - flagsPlaced > 0:
                buttons[1,colls]["bg"] = GREY
                buttons[2,colls]["bg"] = GREY
            elif bombsNum - flagsPlaced == 0:
                buttons[1,colls]["bg"] = GREEN
                buttons[2,colls]["bg"] = GREEN
            else:
                buttons[1,colls]["bg"] = RED
                buttons[2,colls]["bg"] = RED      
            buttons[2,colls]["text"] = F"{bombsNum - flagsPlaced}"
        elif boardNums[self.row,self.coll] == 0:                        
                        
            boardStat[self.row,self.coll] = 0
            buttons[self.row,self.coll]["text"] = boardStat[self.row,self.coll]
            buttons[self.row,self.coll]["bg"] = DGREY 
            buttons[self.row,self.coll]["fg"] = DGREY
            spotsPressed += 1
            
            if self.row != 0:
                boardStat[self.row-1,self.coll] = boardNums[self.row-1,self.coll]  
                change(self.row-1,self.coll)
                    
            if self.row != rows-1:
                boardStat[self.row+1,self.coll] = boardNums[self.row+1,self.coll]
                change(self.row+1,self.coll)
                    
            if self.coll != 0:
                boardStat[self.row,self.coll-1] = boardNums[self.row,self.coll-1]
                change(self.row,self.coll-1)
                    
            if self.coll != colls-1:
                boardStat[self.row,self.coll+1] = boardNums[self.row,self.coll+1]
                change(self.row,self.coll+1)
                    
            if self.row != rows-1 and self.coll != 0:
                boardStat[self.row+1,self.coll-1] = boardNums[self.row+1,self.coll-1]
                change(self.row+1,self.coll-1)          
                    
            if self.row != rows-1 and self.coll != colls-1:
                boardStat[self.row+1,self.coll+1] = boardNums[self.row+1,self.coll+1]
                change(self.row+1,self.coll+1)
                    
            if self.row != 0 and self.coll != 0:
                boardStat[self.row-1,self.coll-1] = boardNums[self.row-1,self.coll-1]
                change(self.row-1,self.coll-1)
                    
            if self.row != 0 and self.coll != colls-1:
                boardStat[self.row-1,self.coll+1] = boardNums[self.row-1,self.coll+1]
                change(self.row-1,self.coll+1)
                
        else:
            boardStat[self.row,self.coll] = boardNums[self.row,self.coll]
            change(self.row,self.coll)
        if win:
            displayText = "you won the game"
        boardAtr[self.row,self.coll].press = True
        
buttons = np.array([tk.Button(text = "")])
board = np.array([""])
boardNums = np.array([0])
boardAtr = np.array([Atr("","",0,0,0)])
boardStat = np.array([""])
pres = np.array([""])

rows = int(input("enter number of rows: "))
colls = int(input("enter the number of collumns: "))
bombsNum = int(input(f"enter number of bombs on the board(the board has {rows*colls} spots, can also enter -2 for half -3 for one-third ect...): "))
if input("do you want color only mode ( y or n ): ") == "y":
    colorsOnly = True
else:
    colorsOnly = False
if input("do you want hardcore mode( y or n ): ") == "y":
    hardcore = True
else:
    hardcore = False
if bombsNum < 0:
    bombsNum = round((rows*colls)/(0-bombsNum))
print(bombsNum)
pres.resize(rows,colls)
board.resize(rows,colls)
boardNums.resize(rows,colls)
buttons.resize(rows,colls+1)   
boardAtr.resize(rows,colls)
boardStat.resize(rows,colls)

infoW = 10
W = colls * sizeW + 80
H = rows * sizeH
butW = W/colls
butH = H/rows
spots = rows * colls

textH = 25
window = tk.Tk()
window.geometry(f"{W}x{H}")
window.title("Minesweeper")
window.bind("<f>",flagModeSwitch)
window.bind("<s>",solve)
window.bind("<h>",heatmap)
    
for r in range(rows):
    for c in range(colls):
        board[r,c] = " "
        boardStat[r,c] = "-"
        pres[r,c] = ""
        
for n in range(bombsNum):
    while True:
        rowPlaced = random.randint(0, rows-1)
        collPlaced = random.randint(0, colls-1)
        if board[rowPlaced,collPlaced] != "X":
            board[rowPlaced,collPlaced] = "X"
            break
        
for r in range(rows):
    for c in range(colls):
        boardNums[r,c] = spotsAround(r,c)        
            
makeBoard()        
        
while True:
    randr = random.randint(0, rows-1)
    randc = random.randint(0, colls-1)
    if boardNums[randr,randc] == 0:
        boardAtr[randr,randc].pressed()    
        break
                 
window.mainloop()