# -*- coding: utf-8 -*-
"""
Created on Wed Dec 14 11:19:45 2022

@author: 4carter.ross
"""

import numpy 
import numpy as np
import tkinter
import tkinter as tk

RED = "#FF0000"
GREEN = "#00FF00"
BLUE = "#0000FF"
YELLOW = "#FFFF00"
CYAN = "#00FFFF"
MAGENTA = "#FF00FF"
GREY = "#DFDFDF"
DGREY = "#A8A8A8"
PINK = "#FFC0CB"
ORANGE = "#FFA500"
infoW = 15
pacR = "<"
pacL = ">"
pacU = "v"
pacD = "ʌ"

class spot():

  def __init__(self,r,c):
    self.r = r
    self.c = c

  def pressed(self):
    global ghostCount
    if mode == "walls":
        board[self.r,self.c] = 1
    elif mode == "port1":
        if direction == "r":
            board[self.r,self.c] = 11
        elif direction == "d":
            board[self.r,self.c] = 12
        elif direction == "l":
            board[self.r,self.c] = 13
        elif direction == "u":
            board[self.r,self.c] = 14
    elif mode == "port2":
        if direction == "r":
            board[self.r,self.c] = 21
        elif direction == "d":
            board[self.r,self.c] = 22
        elif direction == "l":
            board[self.r,self.c] = 23
        elif direction == "u":
            board[self.r,self.c] = 24
    elif mode == "port3":
        if direction == "r":
            board[self.r,self.c] = 31
        elif direction == "d":
            board[self.r,self.c] = 32
        elif direction == "l":
            board[self.r,self.c] = 33
        elif direction == "u":
            board[self.r,self.c] = 34
    elif mode == "port4":
        if direction == "r":
            board[self.r,self.c] = 41
        elif direction == "d":
            board[self.r,self.c] = 42
        elif direction == "l":
            board[self.r,self.c] = 43
        elif direction == "u":
            board[self.r,self.c] = 44
    elif mode == "pacman":
        if direction == "r":
            board[self.r,self.c] = 51
        elif direction == "d":
            board[self.r,self.c] = 52
        elif direction == "l":
            board[self.r,self.c] = 53
        elif direction == "u":
            board[self.r,self.c] = 54
    elif mode == "clear":
        if board[self.r,self.c] > 60:
            ghostCount -= 1
        board[self.r,self.c] = 0
    elif mode == "ghost":
        if ghostCount < 4:
            if ghostCount == 0:
                board[self.r,self.c] = 61
            if ghostCount == 1:
                board[self.r,self.c] = 62
            if ghostCount == 2:
                board[self.r,self.c] = 63
            if ghostCount == 3:
                board[self.r,self.c] = 64
            ghostCount += 1
    
    drawBoard()

def walls(op=""):
    global mode
    mode = "walls"
    drawBoard()

def clear(op=""):
    global mode
    mode = "clear"
    drawBoard()

def port1(op=""):
    global mode
    mode = "port1"
    drawBoard()

def port2(op=""):
    global mode
    mode = "port2"
    drawBoard()

def port3(op=""):
    global mode
    mode = "port3"
    drawBoard()
  
def port4(op=""):
    global mode
    mode = "port4"
    drawBoard()

def pacman(op=""):
    global mode
    mode = "pacman"
    drawBoard()

def ghost(op=""):
    global mode 
    mode = "ghost"
    drawBoard()

def rotate(op=""):
    global direction
    if direction == "r":
        direction = "d"
    elif direction == "d":
        direction = "l"
    elif direction == "l":
        direction = "u"
    elif direction == "u":
        direction = "r"
    drawBoard()

def drawBoard():
    global board, buttons, direction, GREY, DGREY, pacR, pacL, pacU, pacD, mode
    buttons[1,20]["text"] = mode
    buttons[3,20]["text"] = direction
    for r in range(20):
        for c in range(20):
            if board[r,c] == 0:
                buttons[r,c]["bg"] = GREY
                buttons[r,c]["text"] = ""
            elif board[r,c] == 1:
                buttons[r,c]["bg"] = DGREY
                buttons[r,c]["text"] = ""
            elif board[r,c] > 10 and board[r,c] < 15:
                buttons[r,c]["bg"] = CYAN
                if board[r,c] == 11:
                    buttons[r,c]["text"] = pacL
                elif board[r,c] == 12:
                    buttons[r,c]["text"] = pacU
                elif board[r,c] == 13:
                    buttons[r,c]["text"] = pacR
                elif board[r,c] == 14:
                    buttons[r,c]["text"] = pacD
            elif board[r,c] > 20 and board[r,c] < 25:
                buttons[r,c]["bg"] = RED
                if board[r,c] == 21:
                    buttons[r,c]["text"] = pacL
                elif board[r,c] == 22:
                    buttons[r,c]["text"] = pacU
                elif board[r,c] == 23:
                    buttons[r,c]["text"] = pacR
                elif board[r,c] == 24:
                    buttons[r,c]["text"] = pacD
            elif board[r,c] > 30 and board[r,c] < 35:
                buttons[r,c]["bg"] = MAGENTA
                if board[r,c] == 31:
                    buttons[r,c]["text"] = pacL
                elif board[r,c] == 32:
                    buttons[r,c]["text"] = pacU
                elif board[r,c] == 33:
                    buttons[r,c]["text"] = pacR
                elif board[r,c] == 34:
                    buttons[r,c]["text"] = pacD
            elif board[r,c] > 40 and board[r,c] < 45:
                buttons[r,c]["bg"] = GREEN
                if board[r,c] == 41:
                    buttons[r,c]["text"] = pacL
                elif board[r,c] == 42:
                    buttons[r,c]["text"] = pacU
                elif board[r,c] == 43:
                    buttons[r,c]["text"] = pacR
                elif board[r,c] == 44:
                    buttons[r,c]["text"] = pacD
            elif board[r,c] == 51:
                buttons[r,c]["bg"] = YELLOW
                buttons[r,c]["text"] = pacR
            elif board[r,c] == 52:
                buttons[r,c]["bg"] = YELLOW
                buttons[r,c]["text"] = pacD
            elif board[r,c] == 53:
                buttons[r,c]["bg"] = YELLOW
                buttons[r,c]["text"] = pacL
            elif board[r,c] == 54:
                buttons[r,c]["bg"] = YELLOW
                buttons[r,c]["text"] = pacU
            elif board[r,c] == 61:
                buttons[r,c]["bg"] = CYAN
                buttons[r,c]["text"] = "👻"
            elif board[r,c] == 62:
                buttons[r,c]["bg"] = PINK
                buttons[r,c]["text"] = "👻"
            elif board[r,c] == 63:
                buttons[r,c]["bg"] = RED
                buttons[r,c]["text"] = "👻"
            elif board[r,c] == 64:
                buttons[r,c]["bg"] = ORANGE
                buttons[r,c]["text"] = "👻"

def printCode(op=""):
    global board
    print("np.array([",end="")
    for r in range(20):
        if r != 0:
            print("          [",end="")
        else:
            print("[",end="")
        for c in range(19):
            print(f"{board[r,c]},",end="")
        if r != 19:
            print(f"{board[r,19]}],")
        else:
            print(f"{board[r,19]}]])")
                
if input("do you want a new board (y or n): ") == "y":
    board = np.array([[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]])
    
else:
    board = np.array([[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [1,62,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,61,1],
              [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
              [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
              [1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1],
              [1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1],
              [1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1],
              [1,1,1,1,0,1,0,0,0,0,51,0,0,0,1,0,1,1,1,1],
              [11,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,13],
              [21,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,23],
              [1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1],
              [1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1],
              [1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1],
              [1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1],
              [1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1],
              [1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1],
              [1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1],
              [1,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,1],
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]])

window = tk.Tk()

mode = "walls"
direction = "r"

buttons = np.array([tk.Button(master = window, width = 2, bg = GREY)])
buttons.resize(20,21)
boardPress = np.array(spot(0,0))
boardPress.resize(20,20)
for r in range(20):
    for c in range(20):
        boardPress[r,c] = spot(r,c)
        buttons[r,c] = tk.Button(master = window, width = 2, bg = GREY, command = boardPress[r,c].pressed)
        buttons[r,c].grid(row = r,column = c)
buttons[0,20] = tk.Button(master = window,bg = GREY, width = infoW, text = "mode:")
buttons[1,20] = tk.Button(master = window,bg = GREY, width = infoW, text = mode)
buttons[2,20] = tk.Button(master = window,bg = GREY, width = infoW, text = "direction:")
buttons[3,20] = tk.Button(master = window,bg = GREY, width = infoW, text = direction)
buttons[0,20].grid(row = 0,column = 20)
buttons[1,20].grid(row = 1,column = 20)
buttons[2,20].grid(row = 2,column = 20)
buttons[3,20].grid(row = 3,column = 20)

drawBoard()

ghostCount = 0

window.bind("<w>",walls)
window.bind("<c>",clear)
window.bind("1",port1)
window.bind("2",port2)
window.bind("3",port3)
window.bind("4",port4)
window.bind("<p>",pacman)
window.bind("<r>",rotate)
window.bind("<v>",printCode)
window.bind("<g>",ghost)

window.mainloop()