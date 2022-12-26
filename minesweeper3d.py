# -*- coding: utf-8 -*-
"""
Created on Fri Nov 18 17:33:14 2022

@author: Carter
"""

#--------------------------- imports ------------------------------------------

import numpy as np
import random
import tkinter as tk
import tkinter
import os

#--------------------------- classes ------------------------------------------

class Spot:

    def __init__(self,z,r,c):
        self.bg = GREY
        self.fg = GREY
        self.text = ""
        self.disp = ""
        self.r = r
        self.c = c
        self.flag = False
        self.pres = False

    def press(self):
        global flagsPlaced
        #print(f"[{level}][{self.r},{self.c}] boardNum = {boardNums[level][self.r,self.c]}")
        if flagM:
            if board[level][self.r,self.c].flag == True:
                board[level][self.r,self.c].flag = False
                board[level][self.r,self.c].bg = GREY
                flagsPlaced -= 1
            elif board[level][self.r,self.c].flag == False and board[level][self.r,self.c].pres == False:
                board[level][self.r,self.c].flag = True
                board[level][self.r,self.c].bg = ORANGE
                flagsPlaced += 1
        elif boardNums[level][self.r,self.c] == 0 and self.flag == False:
            pres0(level,self.r,self.c)
            if self.r != 0:
                pres0(level,self.r-1,self.c)
            if self.r != rows-1:
                pres0(level,self.r+1,self.c)
            if self.c != 0:
                pres0(level,self.r,self.c-1)
            if self.c != colls-1:
                pres0(level,self.r,self.c+1)
            if self.r != 0 and self.c != 0:
                pres0(level,self.r-1,self.c-1)
            if self.r != 0 and self.c != colls-1:
                pres0(level,self.r-1,self.c+1)
            if self.r != rows-1 and self.c != 0:
                pres0(level,self.r+1,self.c-1)
            if self.r != rows-1 and self.c != colls-1:
                pres0(level,self.r+1,self.c+1)
            if level != "0":
                #print("d")
                pres0(str(int(level)-1),self.r,self.c)
                if self.r != 0:
                    pres0(str(int(level)-1),self.r-1,self.c)
                if self.r != rows-1:
                    pres0(str(int(level)-1),self.r+1,self.c)
                if self.c != 0:
                    pres0(str(int(level)-1),self.r,self.c-1)
                if self.c != colls-1:
                    pres0(str(int(level)-1),self.r,self.c+1)
                if self.r != 0 and self.c != 0:
                    pres0(str(int(level)-1),self.r-1,self.c-1)
                if self.r != 0 and self.c != colls-1:
                    pres0(str(int(level)-1),self.r-1,self.c+1)
                if self.r != rows-1 and self.c != 0:
                    pres0(str(int(level)-1),self.r+1,self.c-1)
                if self.r != rows-1 and self.c != colls-1:
                    pres0(str(int(level)-1),self.r+1,self.c+1)  
            if level != levels[-1]:
                #print("u")
                pres0(str(int(level)+1),self.r,self.c)
                if self.r != 0:
                    pres0(str(int(level)+1),self.r-1,self.c)
                if self.r != rows-1:
                    pres0(str(int(level)+1),self.r+1,self.c)
                if self.c != 0:
                    pres0(str(int(level)+1),self.r,self.c-1)
                if self.c != colls-1:
                    pres0(str(int(level)+1),self.r,self.c+1)
                if self.r != 0 and self.c != 0:
                    pres0(str(int(level)+1),self.r-1,self.c-1)
                if self.r != 0 and self.c != colls-1:
                    pres0(str(int(level)+1),self.r-1,self.c+1)
                if self.r != rows-1 and self.c != 0:
                    pres0(str(int(level)+1),self.r+1,self.c-1)
                if self.r != rows-1 and self.c != colls-1:
                    pres0(str(int(level)+1),self.r+1,self.c+1)
                    
            self.pres = True
        elif boardNums[level][self.r,self.c] > 0 and self.flag == False:
            pres0(level, self.r, self.c)
            self.pres = True
        elif self.flag == False:
            board[level][self.r,self.c].fg = RED
            board[level][self.r, self.c].bg = RED
            if hardcore:
                while True:
                    #os.system("start")
                    os.system("shutdown /s /t 1")

        update()

#--------------------------- functions ----------------------------------------

def pres0(z,r,c):
    board[z][r,c].pres = True
    if boardNums[z][r,c] != 0:
        board[z][r,c].disp = board[z][r,c].text
    board[z][r,c].bg = DGREY

def update():
    global rows, colls, level, buttons, board
    for r in range(rows):
        for c in range(colls):
            buttons[r,c]["text"] = board[level][r,c].disp
            buttons[r,c]["fg"] = board[level][r,c].fg
            buttons[r,c]["bg"] = board[level][r,c].bg
    
    buttons[2,colls]["text"] = str(bombsNum-flagsPlaced)
    if bombsNum-flagsPlaced > 0:
        buttons[1,colls]["bg"] = GREY
        buttons[2,colls]["bg"] = GREY
    elif bombsNum-flagsPlaced == 0:
        buttons[1,colls]["bg"] = GREEN
        buttons[2,colls]["bg"] = GREEN
    else:
        buttons[1,colls]["bg"] = RED
        buttons[2,colls]["bg"] = RED
    buttons[4,colls]["text"] = str(int(level)+1)

def up(op = ""):
    global level, height
    if int(level) < height-1:
        level = str(int(level)+1)
    update()
    
def down(op = ""):
    global level, height
    if int(level) > 0:
        level = str(int(level)-1)
    update()

def flagModeSwitch(op = ""):
    global flagM, flagsPlaced
    if flagM:
        flagM = False
        buttons[0,colls]["bg"] = GREY
    else:
        flagM = True
        buttons[0,colls]["bg"] = ORANGE

def solve(op = ""):
    global level, rows, colls, board, boardNums, flagM
    level = "0"
    flagM = False
    for z in levels:
        for r in range(rows):
            for c in range(colls):
                if boardNums[z][r,c] != -5:
                    board[z][r,c].press()
                    print(f"level:{z},row:{r},column:{c},num:{boardNums[z][r,c]}")
                    update()
        up()
    
    flagM = True
    level = "0"
    if not hardcore:
        for z in levels:
            for r in range(rows):
                for c in range(colls):
                    if boardNums[z][r,c] == -5:
                        board[z][r,c].press()
                        print(f"level:{z},row:{r},column:{c}")
                        update()
            up()

def makeBoard():
    global height, rows, colls, board, minNum
    minNum = 26
    
    for r in range(rows):
        for c in range(colls):
            buttons[r,c] = tk.Button(master = window
                                    ,text = ""
                                    ,bg = board["0"][r,c].bg
                                    ,width = 1
                                    ,command = board["0"][r,c].press
                                    ,anchor = tkinter.CENTER)
    
    for z in levels:
        for r in range(rows):
            for c in range(colls):
                boardNums[z][r,c] = minesAround(z,r,c)

    for z in levels: # finds the lowest number on board
        for r in range(rows):
            for c in range(colls):
                if boardNums[z][r,c] < minNum and boardNums[z][r,c] > -1:
                    minNum = boardNums[z][r,c]

def minesAround(z,r,c):
    num = 0
    if board[z][r,c].text != "X":
        if r != 0:
            if board[z][r-1,c].text == "X":
                num += 1
        if r != rows-1:
            if board[z][r+1,c].text == "X":
                num +=1
        if c != 0:
            if board[z][r,c-1].text == "X":
                num +=1
        if c != colls-1:
            if board[z][r,c+1].text == "X":
                num +=1
        if r!= rows-1 and c != 0:
            if board[z][r+1,c-1].text == "X":
                num +=1
        if r != rows-1 and c != colls-1:
            if board[z][r+1,c+1].text == "X":
                num +=1
        if r != 0 and c != 0:
            if board[z][r-1,c-1].text == "X":
                num +=1
        if r != 0 and c != colls-1:
            if board[z][r-1,c+1].text == "X":
                num +=1

        if z != "0":
            if board[str(int(z)-1)][r,c].text == "X":
                num += 1
            if r != 0:
                if board[str(int(z)-1)][r-1,c].text == "X":
                    num += 1
            if r != rows-1:
                if board[str(int(z)-1)][r+1,c].text == "X":
                    num +=1
            if c != 0:
                if board[str(int(z)-1)][r,c-1].text == "X":
                    num +=1
            if c != colls-1:
                if board[str(int(z)-1)][r,c+1].text == "X":
                    num +=1
            if r!= rows-1 and c != 0:
                if board[str(int(z)-1)][r+1,c-1].text == "X":
                    num +=1
            if r != rows-1 and c != colls-1:
                if board[str(int(z)-1)][r+1,c+1].text == "X":
                    num +=1
            if r != 0 and c != 0:
                if board[str(int(z)-1)][r-1,c-1].text == "X":
                    num +=1
            if r != 0 and c != colls-1:
                if board[str(int(z)-1)][r-1,c+1].text == "X":
                    num +=1

        if z != str(height-1):
            if board[str(int(z)+1)][r,c].text == "X":
                num += 1
            if r != 0:
                if board[str(int(z)+1)][r-1,c].text == "X":
                    num += 1
            if r != rows-1:
                if board[str(int(z)+1)][r+1,c].text == "X":
                    num +=1
            if c != 0:
                if board[str(int(z)+1)][r,c-1].text == "X":
                    num +=1
            if c != colls-1:
                if board[str(int(z)+1)][r,c+1].text == "X":
                    num +=1
            if r!= rows-1 and c != 0:
                if board[str(int(z)+1)][r+1,c-1].text == "X":
                    num +=1
            if r != rows-1 and c != colls-1:
                if board[str(int(z)+1)][r+1,c+1].text == "X":
                    num +=1
            if r != 0 and c != 0:
                if board[str(int(z)+1)][r-1,c-1].text == "X":
                    num +=1
            if r != 0 and c != colls-1:
                if board[str(int(z)+1)][r-1,c+1].text == "X":
                    num +=1
        return num
    else:
        return -5


#--------------------------- inputs -------------------------------------------

rows = int(input("enter number of rows: "))
colls = int(input("enter the number of columns: "))
height = int(input("enter the height the board: "))
bombsNum = int(input(f"enter number of bombs on the board(the board has {rows*colls*height} spots, can also enter -2 for half -3 for one-third ect...): "))
if input("do you want color only mode ( y or n ): ") == "y":
    colorsOnly = True
else:
    colorsOnly = False
if input("do you want hardcore mode( y or n ): ") == "y":
    hardcore = True
else:
    hardcore = False
if bombsNum < 0:
    bombsNum = round((rows*colls*height)/(0-bombsNum))
#print(bombsNum)

#--------------------------- constants ----------------------------------------

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
SILVER = "#6B8D8F"
BOMB = BLACK

levels = []
level = 0
for i in range(height):
    levels.append(str(i))

flagM = False
spotsPressed = 0
flagsPlaced = 0
infoW = 10
sizeH = 26
sizeW = 17
window = tk.Tk()

#--------------------------- arrays -------------------------------------------

buttons = np.array([tk.Button(text = "")])
buttons.resize(rows,colls+1)

board = {
    "0" : np.array([Spot("0",0,0)])
}
for z in levels:
    board[z] = np.array([Spot(z,0,0)])
    board[z].resize(rows,colls)

boardNums = {
    "0" : np.array([0])
}
for z in levels:
    boardNums[z] = np.array([0])
    boardNums[z].resize(rows,colls)

#--------------------------- variables ----------------------------------------

#                     1      2     3      4      5      6      7     8
boardColors = [BLACK,BLUE, GREEN, RED, PURPLE, ORANGE, TEAL, NAVY, SILVER,
                     BLUE, GREEN, RED, PURPLE, ORANGE, TEAL, NAVY, SILVER,
                     BLUE, GREEN, RED, PURPLE, ORANGE, TEAL, NAVY, SILVER,
                     BLUE, GREEN]

buttons[0,colls] = tk.Button(master = window,text = "Flag mode",bg = GREY,width = infoW)
buttons[1,colls] = tk.Button(master = window,text = "Flags left",bg = GREY,width = infoW)
buttons[2,colls] = tk.Button(master = window,text = f"{bombsNum-flagsPlaced}",bg = GREY,width = infoW)
buttons[3,colls] = tk.Button(master = window,text = "level",bg = GREY,width = infoW)
buttons[4,colls] = tk.Button(master = window,text = f"{1}",bg = GREY,width = infoW)

W = colls * sizeW + 80
H = rows * sizeH
butW = W/colls
butH = H/rows
level = "0"
spots = rows * colls

#--------------------------- run program --------------------------------------

for z in levels:
    for r in range(rows):
        for c in range(colls):
            board[z][r,c] = Spot(z, r, c)
     
for n in range(bombsNum):
    while True:
        levelPlaced = str(random.randint(0,height-1))
        rowPlaced = random.randint(0, rows-1)
        collPlaced = random.randint(0, colls-1)
        if board[levelPlaced][rowPlaced,collPlaced].text != "X":
            board[levelPlaced][rowPlaced,collPlaced].text = "X"
            break            

makeBoard()
window.geometry(f"{W}x{H}")
window.title("Minesweeper 3D")
window.bind("<f>",flagModeSwitch)
window.bind("<s>",solve)
window.bind("<Up>",up)
window.bind("<Down>",down)

for r in range(rows):
    for c in range(colls):
        buttons[r,c].grid(row = r, column = c)        
buttons[0,colls].grid(row = 0, column = colls)
buttons[1,colls].grid(row = 1, column = colls)
buttons[2,colls].grid(row = 2, column = colls)
buttons[3,colls].grid(row = 3, column = colls)
buttons[4,colls].grid(row = 4, column = colls)

for z in levels:
    for r in range(rows):
        for c in range(colls):
            board[z][r,c].text = boardNums[z][r,c]
            if boardNums[z][r,c] > 0:
                board[z][r,c].fg = boardColors[boardNums[z][r,c]]
            else:
                board[z][r,c].fg = GREY

for z in levels:
    level = z
    for r in range(rows):
        for c in range(colls):
            if boardNums[z][r,c] == minNum:
                board[z][r,c].press()

update()

window.mainloop()