#  *  coding: utf 8  *

import numpy as np
import colorama
from colorama import Fore, Back
colorama.init(autoreset=True)

player = input("enter player you will be (1 or 2): ")
if input("will you go first ( y or n ): ") == "y":
    if player == 1:
        turn = "1"
    else:
        turn = "2"
else:
    if player == 1:
        turn = "2"
    else:
        turn = "1"

if input("do you want the default game settings ( y or n ): ") == "y":
    columnsNum = 7
    rowsNum = 6
    size = 4
    winNum = 4
else:
    columnsNum = int(input("enter number of columns on board: "))
    rowsNum = int(input("enter numbers of rows on the board: "))
    size = int(input("what size do you want your board (ex: 1 for 1x or 2 for 2x larger board):"))
    winNum = int(input("enter number in a row to win: "))

gameDone = False
board = np.array([" "])
board.resize(rowsNum, columnsNum)

for r in range(rowsNum):
    for c in range(columnsNum):
        board[r,c] = " "            

def wCheck ():
    global gameDone, winCheck
    if num == winNum + 1:
        gameDone = True
        winCheck = True
        return True

def wCheck2 ():
    global gameDone, winCheck
    if num == winNum + 1:
        gameDone = True
        winCheck = True
        return True

def printStat (size, colls, row):
    print("\n|",end = "")
    for c in range(colls):
        for i in range(size*3):
            if board[row,c] == " ": 
                print(board[row,c],end = "")
            elif board[row,c] == "1":
                print(Back.RED +" ", end = "")
            elif board[row,c] == "2":
                print(Back.YELLOW +" ",end = "")
                
        print("|",end = "")

def printDiv (size, colls):
    print("\n+",end = "")
    for r in range(colls):
        for i in range(size):
            print("---",end = "")
        print("+",end = "")
        

def printBoard (size, rows, colls):
    print("\n"*100)
    for row in range(rows):
        for i in range(size):
            printStat(size, colls, row)
        printDiv(size, colls)
        
printBoard(size, rowsNum, columnsNum)

while not gameDone:
    if turn == "1":
        cTurn = "2"
    else:
        cTurn = "1"
    placed = False
    winCheck = False
    printBoard(size, rowsNum, columnsNum)
    if player == "1" and turn == "1":
        locDrop = int(input(f"\nenter the spot to drop the piece (1-{columnsNum}): "))
    elif player == "1" and turn == "2":
        locDrop = int(input(f"\nenter the spot the other player wants drop the piece (1-{columnsNum}): "))
    elif player == "2" and turn == "2":
        locDrop = int(input(f"\nenter the spot to drop the piece (1-{columnsNum}): "))
    elif player == "2" and turn == "1":
        locDrop = int(input(f"\nenter the spot the other player wants drop the piece (1-{columnsNum}): "))
    rowCheck = -1
    while not placed:
        if board[rowCheck, locDrop-1] != "1" and board[rowCheck,locDrop-1] != "2":
            if turn == "1":
                board[rowCheck, locDrop-1] = "1"
                turn = "2"
            else:
                board[rowCheck, locDrop-1] = "2"
                turn = "1"
            placed = True
        rowCheck -= 1
    while not winCheck:
        num = 0
        for r in range(rowsNum):
            for c in range(columnsNum):
                num = 0
                if board[r,c] == cTurn:
                    for c2 in range(winNum):
                        if c2 + c < columnsNum:
                            if board[r,c2 + c] == cTurn:
                                num += 1
                                if wCheck():
                                    gameDone = True
                                    break
                    for r2 in range(winNum):
                        if r2 + r < rowsNum:
                            if board[r2 + r,c] == cTurn:
                                num += 1
                                if wCheck2():
                                    gameDone = True
                                    break
        winCheck = True

print(f"the game was won by player{cTurn}")