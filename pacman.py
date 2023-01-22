# -*- coding: utf-8 -*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
"""
Created on Tue Dec 13 03:42:58 2022

@author: Carter
"""

import numpy as np
import tkinter as tk
import heapq
import random

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
pacNums = {
    "r" : 51,
    "d" : 52,
    "l" : 53,
    "u" : 54
}
   
def heuristic(a, b):
    return np.sqrt((b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2)

def pathfind_ghost(array, start, goal):
    global difficulty
    neighbors = [(0,1),(0,-1),(1,0),(-1,0)]
    close_set = set()
    came_from = {}
    gscore = {start:0}
    fscore = {start:heuristic(start, goal)}
    oheap = []
    heapq.heappush(oheap, (fscore[start], start))
    while oheap:
        current = heapq.heappop(oheap)[1]
        if current == goal:
            data = []
            while current in came_from:
                data.append(current)
                current = came_from[current]
            return data
        close_set.add(current)
        for i, j in neighbors:
            neighbor = current[0] + i, current[1] + j
            tentative_g_score = gscore[current] + heuristic(current, neighbor)
            if 0 <= neighbor[0] < array.shape[0]:
                if 0 <= neighbor[1] < array.shape[1]:
                    if bool(array[neighbor[0]][neighbor[1]] == 1 and difficulty > -1) or bool(array[neighbor[0]][neighbor[1]] > 60 and difficulty == 0) or bool(array[neighbor[0]][neighbor[1]] > 10 and array[neighbor[0]][neighbor[1]] < 15) or bool(array[neighbor[0]][neighbor[1]] > 10 and array[neighbor[0]][neighbor[1]] < 15)  or bool(array[neighbor[0]][neighbor[1]] > 20 and array[neighbor[0]][neighbor[1]] < 25) or bool(array[neighbor[0]][neighbor[1]] > 30 and array[neighbor[0]][neighbor[1]] < 35) or bool(array[neighbor[0]][neighbor[1]] > 40 and array[neighbor[0]][neighbor[1]] < 45) or bool(array[neighbor[0]][neighbor[1]] > 50 and array[neighbor[0]][neighbor[1]] < 55):
                        continue
                else:
                    continue
            else:
                continue
            if neighbor in close_set and tentative_g_score >= gscore.get(neighbor, 0):
                continue
            if  tentative_g_score < gscore.get(neighbor, 0) or neighbor not in [i[1]for i in oheap]:
                came_from[neighbor] = current
                gscore[neighbor] = tentative_g_score
                fscore[neighbor] = tentative_g_score + heuristic(neighbor, goal)
                heapq.heappush(oheap, (fscore[neighbor], neighbor))
    return [(start)]

def drawBoard():
    global board, boardVisit, buttons, GREY, DGREY, YELLOW, GREEN, CYAN, RED, PINK, ORANGE, pacR, pacL, pacU, pacD, playerR, playerC
    for r in range(20):
        for c in range(20):
            if board[r,c] == 0:
                if not boardVisit[r,c]:
                    buttons[r,c]["bg"] = GREY
                    buttons[r,c]["text"] = "-"
                else:
                    buttons[r,c]["bg"] = GREY
                    buttons[r,c]["text"] = " "
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
           
def nextMove(ghostR, ghostC, op=""):
    global board, avoidLst, route
    route = pathfind_ghost(board, (playerR,playerC),(ghostR,ghostC))
    if len(route) > 1 and difficulty != 2:
        return route[1]
    elif difficulty > 1: 
        while True:
            newDir = random.randint(1,4)
            if newDir == 1:
                if board[ghostR, ghostC + 1] not in [1,11,12,13,14,21,22,23,24,31,32,33,34,41,42,43,44]:
                    return(ghostR,ghostC + 1)
            if newDir == 2:
                if board[ghostR, ghostC - 1] not in [1,11,12,13,14,21,22,23,24,31,32,33,34,41,42,43,44]:
                    return(ghostR,ghostC - 1)
            if newDir == 3:
                if board[ghostR + 1, ghostC] not in [1,11,12,13,14,21,22,23,24,31,32,33,34,41,42,43,44]:
                    return(ghostR + 1,ghostC)
            if newDir == 4:
                if board[ghostR - 1, ghostC] not in [1,11,12,13,14,21,22,23,24,31,32,33,34,41,42,43,44]:
                    return(ghostR - 1,ghostC)
        
def playerOnBoard():
    global board
    for r in range(20):
        for c in range(20):
            if board[r,c] > 50 and board[r,c] < 55:
                return True
    return False
    
def pl():
    global board, playerR, playerC
    board[playerR,playerC] = pacNums[direction]

def run(op=""):
    global board, boardVisit, score, totalCollect, collect, playerR, hitWall, lastDirec, playerC, died, direction, nextMoves, bots, turned, portal11, portal12, portal21, portal22, portal31, portal32, portal41, potal42
    turned = False
    hitWall = False
    
    if direction == "r":
        if board[playerR,playerC+1] == 0:
            board[playerR,playerC+1] = 51
        elif board[playerR,playerC+1] > 60:
            died = True
        elif playerR == portal11[0] and playerC+1 == portal11[1]+1: #11-12
            board[portal12[0],portal12[1]] = pacNums[portal12[2]]
            direction = portal12[2]
        elif playerR == portal12[0] and playerC+1 == portal12[1]+1:
            board[portal11[0],portal11[1]] = pacNums[portal11[2]]
            direction = portal11[2]
        elif playerR == portal21[0] and playerC+1 == portal21[1]+1: #21-22
            board[portal22[0],portal22[1]] = pacNums[portal22[2]]
            direction = portal22[2]
        elif playerR == portal22[0] and playerC+1 == portal22[1]+1:
            board[portal21[0],portal21[1]] = pacNums[portal21[2]]   
            direction = portal21[2]
        elif playerR == portal31[0] and playerC+1 == portal31[1]+1: #31-32
            board[portal32[0],portal32[1]] = pacNums[portal32[2]]
            direction = portal32[2]
        elif playerR == portal32[0] and playerC+1 == portal32[1]+1:
            board[portal31[0],portal31[1]] = pacNums[portal31[2]]   
            direction = portal31[2]
        elif playerR == portal41[0] and playerC+1 == portal41[1]+1: #41-42
            board[portal42[0],portal42[1]] = pacNums[portal42[2]]
            direction = portal42[2]
        elif playerR == portal42[0] and playerC+1 == portal42[1]+1:
            board[portal41[0],portal41[1]] = pacNums[portal41[2]] 
            direction = portal41[2]
        else:
            hitWall = True
               
    if direction == "d":
        if board[playerR+1,playerC] == 0:
            board[playerR+1,playerC] = 52
        elif board[playerR+1,playerC] > 60:
            died = True
        elif playerR+1 == portal11[0]+1 and playerC == portal11[1]: #112
            board[portal12[0],portal12[1]] = pacNums[portal12[2]]
            direction = portal12[2]
        elif playerR+1 == portal12[0]+1 and playerC == portal12[1]:
            board[portal11[0],portal11[1]] = pacNums[portal11[2]]
            direction = portal11[2]
        elif playerR+1 == portal21[0]+1 and playerC == portal21[1]: #21-22
            board[portal22[0],portal22[1]] = pacNums[portal22[2]]
            direction = portal22[2]
        elif playerR+1 == portal22[0]+1 and playerC == portal22[1]:
            board[portal21[0],portal21[1]] = pacNums[portal21[2]]  
            direction = portal21[2]
        elif playerR+1 == portal31[0]+1 and playerC == portal31[1]: #31-32
            board[portal32[0],portal32[1]] = pacNums[portal32[2]]
            direction = portal32[2]
        elif playerR+1 == portal32[0]+1 and playerC == portal32[1]:
            board[portal31[0],portal31[1]] = pacNums[portal31[2]]   
            direction = portal31[2]
        elif playerR+1 == portal41[0]+1 and playerC == portal41[1]: #41-42
            board[portal42[0],portal42[1]] = pacNums[portal42[2]]
            direction = portal42[2]
        elif playerR+1 == portal42[0]+1 and playerC == portal42[1]:
            board[portal41[0],portal41[1]] = pacNums[portal41[2]]
            direction = portal41[2]
        else:
            hitWall = True
            
    if direction == "l":
        if board[playerR,playerC-1] == 0:
            board[playerR,playerC-1] = 53
        elif board[playerR,playerC-1] > 60:
            died = True
        elif playerR == portal11[0] and playerC-1 == portal11[1]-1: #11-12
            board[portal12[0],portal12[1]] = pacNums[portal12[2]]
            direction = portal12[2]
        elif playerR == portal12[0] and playerC-1 == portal12[1]-1:
            board[portal11[0],portal11[1]] = pacNums[portal11[2]]
            direction = portal11[2]
        elif playerR == portal21[0] and playerC-1 == portal21[1]-1: #21-22
            board[portal22[0],portal22[1]] = pacNums[portal22[2]]
            direction = portal22[2]
        elif playerR == portal22[0] and playerC-1 == portal22[1]-1:
            board[portal21[0],portal21[1]] = pacNums[portal21[2]]     
            direction = portal21[2]
        elif playerR == portal31[0] and playerC-1 == portal31[1]-1: #31-32
            board[portal32[0],portal32[1]] = pacNums[portal32[2]]
            direction = portal32[2]
        elif playerR == portal32[0] and playerC-1 == portal32[1]-1:
            board[portal31[0],portal31[1]] = pacNums[portal31[2]]    
            direction = portal31[2]
        elif playerR == portal41[0] and playerC-1 == portal41[1]-1: #41-42
            board[portal42[0],portal42[1]] = pacNums[portal42[2]]
            direction = portal42[2]
        elif playerR == portal42[0] and playerC-1 == portal42[1]-1:
            board[portal41[0],portal41[1]] = pacNums[portal41[2]]
            direction = portal41[2]
        else:
            hitWall = True
        
    if direction == "u":
        if board[playerR-1,playerC] == 0:
            board[playerR-1,playerC] = 54
        elif board[playerR-1,playerC] > 60:
            died = True
        elif playerR-1 == portal11[0]-1 and playerC == portal11[1]: #112
            board[portal12[0],portal12[1]] = pacNums[portal12[2]]
            direction = portal12[2]
        elif playerR-1 == portal12[0]-1 and playerC == portal12[1]:
            board[portal11[0],portal11[1]] = pacNums[portal11[2]]
            direction = portal11[2]
        elif playerR-1 == portal21[0]-1 and playerC == portal21[1]: #21-22
            board[portal22[0],portal22[1]] = pacNums[portal22[2]]
            direction = portal22[2]
        elif playerR-1 == portal22[0]-1 and playerC == portal22[1]:
            board[portal21[0],portal21[1]] = pacNums[portal21[2]]       
            direction = portal21[2]
        elif playerR-1 == portal31[0]-1 and playerC == portal31[1]: #31-32
            board[portal32[0],portal32[1]] = pacNums[portal32[2]]
            direction = portal32[2]
        elif playerR-1 == portal32[0]-1 and playerC == portal32[1]:
            board[portal31[0],portal31[1]] = pacNums[portal31[2]]  
            direction = portal31[2]
        elif playerR-1 == portal41[0]-1 and playerC == portal41[1]: #41-42
            board[portal42[0],portal42[1]] = pacNums[portal42[2]]
            direction = portal42[2]
        elif playerR-1 == portal42[0]-1 and playerC == portal42[1]:
            board[portal41[0],portal41[1]] = pacNums[portal41[2]]
            direction = portal41[2]
        else:
            hitWall = True
            
    if not hitWall:
        board[playerR,playerC] = 0
        
    for r in range(20):
        for c in range(20):
            if board[r,c] > 60:
                if board[r,c] == 61:
                    bots[0] = [r,c,board[r,c]]
                elif board[r,c] == 62:
                    bots[1] = [r,c,board[r,c]]
                elif board[r,c] == 63:
                    bots[2] = [r,c,board[r,c]]
                elif board[r,c] == 64:
                    bots[3] = [r,c,board[r,c]]
                    
                board[r,c] = 0
            elif board[r,c] > 50 and board[r,c] < 55:
                playerR, playerC = r,c
                if boardVisit[r,c] == False:
                    boardVisit[r,c] = True
                    collect += 1
       
    for i in range(len(bots)):
        if type(nextMove(bots[i][0],bots[i][1])) == tuple:
            board[nextMove(bots[i][0],bots[i][1])] = bots[i][2]
        else:
            board[bots[i][0],bots[i][1]] = bots[i][2]
                
    if hitWall:
        if board[playerR, playerC+1] > 60 and board[playerR, playerC+1] < 65:
            died = True
        elif board[playerR, playerC-1] > 60 and board[playerR, playerC-1] < 65:
            died = True
        elif board[playerR+1, playerC] > 60 and board[playerR+1, playerC] < 65:
            died = True
        elif board[playerR-1, playerC] > 60 and board[playerR-1, playerC] < 65:
            died = True
    
    score = round((collect/totalCollect)*100)
    buttons[1,20]["text"] = f"{score}%"
    
    drawBoard()
    if not died:
        window.after(100,run)


def turn(direc):
    global direction, pacNums, boards, game, playerR, playerC, turned, backed
    if not turned:
        direction = direc
        turned = True

def turnR(op=""):
    turn("r")
    
def turnD(op=""):
    turn("d")
    
def turnL(op=""):
    turn("l")
    
def turnU(op=""):
    turn("u")

boards = {

    "1" : np.array([[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [11,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,23],
              [1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1],
              [1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1],
              [1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1],
              [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
              [1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
              [1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
              [1,0,1,0,1,0,1,1,1,62,61,1,1,1,0,1,0,1,0,1],
              [1,44,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,34,1],
              [1,32,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,42,1],
              [1,0,1,0,1,0,1,1,1,63,64,1,1,1,0,1,0,1,0,1],
              [1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
              [1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
              [1,0,1,0,0,0,0,0,0,51,0,0,0,0,0,0,0,1,0,1],
              [1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1],
              [1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1],
              [1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1],
              [21,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,13],
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]),
    
    "2" : np.array([[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [1,11,61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,22,1],
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,64,1],
              [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
              [1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
              [1,0,1,0,1,0,51,0,0,0,0,0,0,0,0,0,0,1,0,1],
              [1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1],
              [1,0,1,0,1,0,1,31,0,0,0,0,42,1,0,1,0,1,0,1],
              [1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1],
              [1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1],
              [1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1],
              [1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1],
              [1,0,1,0,1,0,1,24,0,0,0,0,13,1,0,1,0,1,0,1],
              [1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1],
              [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
              [1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
              [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
              [1,62,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [1,44,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,33,1],
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]),
    
    "3" : np.array([[1,1,1,1,1,1,1,1,1,22,1,1,1,1,1,1,1,1,1,1],
              [1,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,33,1],
              [1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1],
              [1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1],
              [1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1],
              [1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1],
              [1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1],
              [1,0,0,0,0,0,0,0,61,1,62,0,0,0,0,0,0,0,0,1],
              [1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1],
              [11,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,13],
              [1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1],
              [1,0,0,0,0,0,0,0,63,1,64,0,0,0,0,0,0,0,0,1],
              [1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1],
              [1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1],
              [1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1],
              [1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1],
              [1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1],
              [1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1],
              [1,41,0,0,0,0,0,0,0,52,0,0,0,0,0,0,0,0,43,1],
              [1,1,1,1,1,1,1,1,1,24,1,1,1,1,1,1,1,1,1,1]]),
    
    "4": np.array([[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
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
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]),
    
    "5" : np.array([[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
              [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1],
              [1,0,1,0,22,1,0,1,0,42,0,1,0,1,0,0,0,0,0,1],
              [1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1],
              [1,0,1,0,1,1,0,1,1,0,1,1,0,1,11,0,0,0,0,1],
              [1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1],
              [1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1],
              [1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1],
              [1,0,0,0,62,0,0,0,61,0,0,0,0,63,0,0,0,64,0,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
              [1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
              [1,0,1,12,1,22,1,0,1,0,32,0,1,0,1,42,32,1,0,1],
              [1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1],
              [1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1],
              [1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1],
              [1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1],
              [1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1],
              [1,0,0,0,0,0,0,0,0,0,52,0,0,0,0,0,0,0,0,1],
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]),
    
    "6" : np.array([[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [11,0,0,0,0,0,0,0,0,51,0,0,0,0,0,0,0,0,0,33],
              [1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1],
              [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
              [1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
              [1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1],
              [41,0,0,0,0,64,1,0,0,0,0,0,0,1,63,0,0,0,0,23],
              [1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1],
              [1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1],
              [1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1],
              [1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1],
              [31,0,0,0,0,62,1,0,0,0,0,0,0,1,61,0,0,0,0,13],
              [1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
              [1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1],
              [1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
              [1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1],
              [21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43],
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]])
    
}

boardsCopy = boards.copy()

window = tk.Tk()

var = input("press enter to play")
if var == "":
    game = str(random.randint(1,len(boards)))
    difficulty = 0
elif "-" in var:
    difficulty = int(var[-1])
    if var[0] == "-":
        game = str(random.randint(1,len(boards)))
    else:
        game = var[0]
else:
    game = var[0]
    difficulty = 0
    
boardVisit = np.array([False])
boardVisit.resize(20,20)
board = boards[game].copy()
bots = [[],[],[],[]]
score = 0
collect = 0
totalCollect = 0
for r in range(20):
    for c in range(20):
        if board[r,c] == 0:
            totalCollect += 1
died = False
turned = False
hitWall = False
backed = False
lastDirec = "r"
buttons = np.array([tk.Button(master = window, width = 2, bg = GREY)])
buttons.resize(20,21)
buttons[0,20] = tk.Button(master = window, width = 15, bg = GREY, text = "score:")
buttons[1,20] = tk.Button(master = window, width = 15, bg = GREY, text = f"{score}%")
buttons[2,20] = tk.Button(master = window, width = 15, bg = GREY, text = "map:")
buttons[3,20] = tk.Button(master = window, width = 15, bg = GREY, text = game)
buttons[4,20] = tk.Button(master = window, width = 15, bg = GREY, text = "difficulty:")
buttons[5,20] = tk.Button(master = window, width = 15, bg = GREY, text = 3-difficulty)
for i in range(6):
    buttons[i,20].grid(row = i, column = 20)

portal11, portal12, portal21, portal22, portal31, portal32, portal41, potal42 = [],[],[],[],[],[],[],[]
for r in range(20):
    for c in range(20):
        buttons[r,c] = tk.Button(master = window, width = 2, bg = GREY)
        buttons[r,c].grid(row = r,column = c)
        if board[r,c] > 50 and board[r,c] < 55:
            playerR, playerC = r,c
        elif board[r,c] > 10 and board[r,c] < 15:
            if board[r,c] == 11:
                if portal11 == []:
                    portal11 = [r,c+1,"r"]
                else:
                    portal12 = [r,c+1,"r"]
            if board[r,c] == 12:
                if portal11 == []:
                    portal11 = [r+1,c,"d"]
                else:
                    portal12 = [r+1,c,"d"]
            if board[r,c] == 13:
                if portal11 == []:
                    portal11 = [r,c-1,"l"]
                else:
                    portal12 = [r,c-1,"l"]
            if board[r,c] == 14:
                if portal11 == []:
                    portal11 = [r-1,c,"u"]
                else:
                    portal12 = [r-1,c,"u"]
                    
        elif board[r,c] > 20 and board[r,c] < 25:
            if board[r,c] == 21:
                if portal21 == []:
                    portal21 = [r,c+1,"r"]
                else:
                    portal22 = [r,c+1,"r"]
            if board[r,c] == 22:
                if portal21 == []:
                    portal21 = [r+1,c,"d"]
                else:
                    portal22 = [r+1,c,"d"]
            if board[r,c] == 23:
                if portal21 == []:
                    portal21 = [r,c-1,"l"]
                else:
                    portal22 = [r,c-1,"l"]
            if board[r,c] == 24:
                if portal21 == []:
                    portal21 = [r-1,c,"u"]
                else:
                    portal22 = [r-1,c,"u"]
                    
        elif board[r,c] > 30 and board[r,c] < 35:
            if board[r,c] == 31:
                if portal31 == []:
                    portal31 = [r,c+1,"r"]
                else:
                    portal32 = [r,c+1,"r"]
            if board[r,c] == 32:
                if portal31 == []:
                    portal31 = [r+1,c,"d"]
                else:
                    portal32 = [r+1,c,"d"]
            if board[r,c] == 33:
                if portal31 == []:
                    portal31 = [r,c-1,"l"]
                else:
                    portal32 = [r,c-1,"l"]
            if board[r,c] == 34:
                if portal31 == []:
                    portal31 = [r-1,c,"u"]
                else:
                    portal32 = [r-1,c,"u"]
                    
        elif board[r,c] > 40 and board[r,c] < 45:
            if board[r,c] == 41:
                if portal41 == []:
                    portal41 = [r,c+1,"r"]
                else:
                    portal42 = [r,c+1,"r"]
            if board[r,c] == 42:
                if portal41 == []:
                    portal41 = [r+1,c,"d"]
                else:
                    portal42 = [r+1,c,"d"]
            if board[r,c] == 43:
                if portal41 == []:
                    portal41 = [r,c-1,"l"]
                else:
                    portal42 = [r,c-1,"l"]
            if board[r,c] == 44:
                if portal41 == []:
                    portal41 = [r-1,c,"u"]
                else:
                    portal42 = [r-1,c,"u"]

m = 50
if portal11 == []:
    portal11, portal12 = [m,m,""], [m,m,""]
if portal21 == []:
    portal21, portal22 = [m,m,""], [m,m,""]
if portal31 == []:
    portal31, portal32 = [m,m,""], [m,m,""]
if portal41 == []:
    portal41, portal42 = [m,m,""], [m,m,""]

if 51 in boards[game]:
    direction = "r"
elif 52 in boards[game]:
    direction = "d"
elif 53 in boards[game]:
    direction = "l"
elif 54 in boards[game]:
    direction = "u"
    
drawBoard()

window.bind("<Right>",turnR)
window.bind("<Down>",turnD)
window.bind("<Left>",turnL)
window.bind("<Up>",turnU)
window.bind("<space>",run)

window.geometry(f"{595}x{520}")
window.mainloop()