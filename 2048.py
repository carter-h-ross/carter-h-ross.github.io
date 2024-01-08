# -*- coding: utf-8 -*-
"""
Created on Sat Dec 16 22:53:34 2023

@author: Carter Ross
"""

import numpy as np
import random
import tkinter as tk
import matplotlib.pyplot as plt

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
YELLOW = "#FFFF00"


#----------------------------------- AI algorithim ----------------------------

def getAiGameScore(currentDepth):
    allMoves = generateMoves(currentDepth)
    global allScores, bestMove, aiMovesCounter, gameScore
    gameScore = 0
    for r in range(R):
        for c in range(C):
            tiles[r,c] = tile(r, c)
    while True:
        if (aiMovesCounter == 0):
            allScores = [getMovesScore(allMoves[i]) for i in range(len(allMoves))]
            maxScoreIndex = allScores.index(max(allScores))
            bestMove = allMoves[maxScoreIndex]
            doneGame = True
            for r in range(R):
                for c in range(C):
                    if (tiles[r,c].val == 0):
                        doneGame = False
                        break
                    else:
                        continue
                    break
            if (max(allScores) == 0 and doneGame):
                print(f"returning game score of: {gameScore}, for depth of {currentDepth}")
                return gameScore
            moveTilesNoWindow(f"{bestMove[aiMovesCounter]}")
            if (switchSearch):
                aiMovesCounter = 0 
            else:
                aiMovesCounter+=1
        else:
            if (aiMovesCounter < currentDepth):
                moveTilesNoWindow(f"{bestMove[aiMovesCounter]}")
                aiMovesCounter+=1
            else:
                aiMovesCounter = 0 
                
def getAiMaxTile(currentDepth):
    print("getting new game")
    allMoves = generateMoves(currentDepth)
    global allScores, bestMove, aiMovesCounter, gameScore
    gameScore = 0
    for r in range(R):
        for c in range(C):
            tiles[r,c] = tile(r, c)
    while True:
        if (aiMovesCounter == 0):
            allScores = [getMovesScore(allMoves[i]) for i in range(len(allMoves))]
            maxScoreIndex = allScores.index(max(allScores))
            bestMove = allMoves[maxScoreIndex]
            doneGame = True
            for r in range(R):
                for c in range(C):
                    if (tiles[r,c].val == 0):
                        doneGame = False
                        break
                    else:
                        continue
                    break
            if (max(allScores) == 0 and doneGame):
                print(f"returning game score of: {gameScore}, for depth of {currentDepth}")
                return gameScore
            moveTilesNoWindowMaxTile(f"{bestMove[aiMovesCounter]}")
            if (switchSearch):
                aiMovesCounter = 0 
            else:
                aiMovesCounter+=1
        else:
            if (aiMovesCounter < currentDepth):
                moveTilesNoWindowMaxTile(f"{bestMove[aiMovesCounter]}")
                aiMovesCounter+=1
            else:
                aiMovesCounter = 0 

#@jit(nopython=True)
def aiMove(opt=""):
    global allScores, bestMove, aiMovesCounter
    if (aiMovesCounter == 0):
        allScores = [getMovesScore(allMoves[i]) for i in range(len(allMoves))]
        maxScoreIndex = allScores.index(max(allScores))
        bestMove = allMoves[maxScoreIndex]
        print(f"the next best series of moves is: {bestMove}")
        moveTiles(f"{bestMove[aiMovesCounter]}")
        if (switchSearch):
            aiMovesCounter = 0 
        else:
            aiMovesCounter+=1
    else:
        if (aiMovesCounter < DEPTH):
            moveTiles(f"{bestMove[aiMovesCounter]}")
            aiMovesCounter+=1
        else:
            aiMovesCounter = 0 
            aiMove()

#@jit(nopython=True)
def aiTestMove(opt=""):
    global allScores, bestMove, aiMovesCounter
    if (aiMovesCounter == 0):
        allScores = [getMovesScore(allMoves[i]) for i in range(len(allMoves))]
        maxScoreIndex = allScores.index(max(allScores))
        bestMove = allMoves[maxScoreIndex]
        print(f"the next best series of moves is: {bestMove}")
        moveTilesNoWindow(f"{bestMove[aiMovesCounter]}")
        if (switchSearch):
            aiMovesCounter = 0 
        else:
            aiMovesCounter+=1
    else:
        if (aiMovesCounter < DEPTH):
            moveTilesNoWindow(f"{bestMove[aiMovesCounter]}")
            aiMovesCounter+=1
        else:
            aiMovesCounter = 0 
            aiTestMove()
        
#@jit(nopython=True)          
def generateMoves(depth):
    if (threeDirection):
        moves = ["r", "d", "l"]
    else:
        moves = ["u", "d", "l", "r"] 
    if depth == 0:
        return []
    if depth == 1:
        return moves
    prev_moves = generateMoves(depth - 1)
    result = []
    for move in moves:
        for prev_move in prev_moves:
            result.append(move + prev_move)
    return result

#@jit(nopython=True)
def getMovesScore(movesList):
    score = 0
    tempTiles = np.array([[tempTile(0)]])      
    tempTiles.resize(R, C)
    for r in range(R):
        for c in range(C):
            tempTiles[r,c] = tempTile(tiles[r,c].val)
            
    for s in range(ACC):
        for i in range(len(movesList)):
            if movesList[i] == "l":
                for r in range(R):
                    count = 0
                    combined = False
                    for c in range(C):
                        if tempTiles[r, c].val > 0:
                            if not combined:
                                if count > 0 and tempTiles[r, count - 1].val == tempTiles[r, c].val:
                                    tempTiles[r, count - 1].val *= 2
                                    score+= tempTiles[r, count - 1].val
                                    tempTiles[r, c].val = 0
                                    combined = True
                                else:
                                    if count != c:
                                        tempTiles[r, count].val = tempTiles[r, c].val
                                        tempTiles[r, c].val = 0
                                    count += 1
                            else:
                                tempTiles[r, count].val = tempTiles[r, c].val
                                if count != c:
                                    tempTiles[r, c].val = 0
                                count += 1
                    combined = False
        
            elif movesList[i] == "r":
                for r in range(R):
                    count = C - 1
                    combined = False
                    for c in range(C - 1, -1, -1):
                        if tempTiles[r, c].val > 0:
                            if not combined:
                                if count < C - 1 and tempTiles[r, count + 1].val == tempTiles[r, c].val:
                                    tempTiles[r, count + 1].val *= 2
                                    score+= tempTiles[r, count + 1].val
                                    tempTiles[r, c].val = 0
                                    combined = True
                                else:
                                    if count != c:
                                        tempTiles[r, count].val = tempTiles[r, c].val
                                        tempTiles[r, c].val = 0
                                    count -= 1
                            else:
                                tempTiles[r, count].val = tempTiles[r, c].val
                                if count != c:
                                    tempTiles[r, c].val = 0
                                count -= 1
                    combined = False
        
            elif movesList[i] == "u":
                for c in range(C):
                    count = 0
                    combined = False
                    for r in range(R):
                        if tempTiles[r, c].val > 0:
                            if not combined:
                                if count > 0 and tempTiles[count - 1, c].val == tempTiles[r, c].val:
                                    tempTiles[count - 1, c].val *= 2
                                    score+= tempTiles[count - 1, c].val
                                    tempTiles[r, c].val = 0
                                    combined = True
                                else:
                                    if count != r:
                                        tempTiles[count, c].val = tempTiles[r, c].val
                                        tempTiles[r, c].val = 0
                                    count += 1
                            else:
                                tempTiles[count, c].val = tempTiles[r, c].val
                                if count != r:
                                    tempTiles[r, c].val = 0
                                count += 1
                    combined = False
        
            elif movesList[i] == "d":
                for c in range(C):
                    count = R - 1
                    combined = False
                    for r in range(R - 1, -1, -1):
                        if tempTiles[r, c].val > 0:
                            if not combined:
                                if count < R - 1 and tempTiles[count + 1, c].val == tempTiles[r, c].val:
                                    tempTiles[count + 1, c].val *= 2
                                    score+= tempTiles[count + 1, c].val
                                    tempTiles[r, c].val = 0
                                    combined = True
                                else:
                                    if count != r:
                                        tempTiles[count, c].val = tempTiles[r, c].val
                                        tempTiles[r, c].val = 0
                                    count -= 1
                            else:
                                tempTiles[count, c].val = tempTiles[r, c].val
                                if count != r:
                                    tempTiles[r, c].val = 0
                                count -= 1
                    combined = False
            if (addNewTiles):
                tempEmptyLocs = []
                for r in range(R):
                    for c in range(C):
                        if (tempTiles[r,c].val == 0):
                            tempEmptyLocs.append([r,c])
                if (len(tempEmptyLocs) > 0):
                    newLocNum = random.randint(0, len(tempEmptyLocs) - 1)
                    tempNewR = tempEmptyLocs[newLocNum][0]
                    tempNewC = tempEmptyLocs[newLocNum][1]
                    chance = random.randint(1,10)
                    if (chance < 10):
                        tempTiles[tempNewR,tempNewC].val = 2
                    else: 
                        tempTiles[tempNewR,tempNewC].val = 4
                else: 
                    score = 0

    if (minEmptyTiles > 0):
        emptyTilesCount = 0 
        for r in range(R):
            for c in range(C):
                if (tempTiles[r,c].val == 0):
                    emptyTilesCount += 1
        if (emptyTilesCount < minEmptyTiles):
            score -= 2 ** (R*C)
    
    return score / ACC

def moveTilesNoWindow(direction):
    global gameScore
    if direction == "l":
        for r in range(R):
            count = 0
            combined = False
            for c in range(C):
                if tiles[r, c].val > 0:
                    if not combined:
                        if count > 0 and tiles[r, count - 1].val == tiles[r, c].val:
                            tiles[r, count - 1].val *= 2
                            gameScore += tiles[r, count - 1].val
                            tiles[r, c].val = 0
                            combined = True
                        else:
                            if count != c:
                                tiles[r, count].val = tiles[r, c].val
                                tiles[r, c].val = 0
                            count += 1
                    else:
                        tiles[r, count].val = tiles[r, c].val
                        if count != c:
                            tiles[r, c].val = 0
                        count += 1
            combined = False

    elif direction == "r":
        for r in range(R):
            count = C - 1
            combined = False
            for c in range(C - 1, -1, -1):
                if tiles[r, c].val > 0:
                    if not combined:
                        if count < C - 1 and tiles[r, count + 1].val == tiles[r, c].val:
                            tiles[r, count + 1].val *= 2
                            gameScore += tiles[r, count + 1].val
                            tiles[r, c].val = 0
                            combined = True
                        else:
                            if count != c:
                                tiles[r, count].val = tiles[r, c].val
                                tiles[r, c].val = 0
                            count -= 1
                    else:
                        tiles[r, count].val = tiles[r, c].val
                        if count != c:
                            tiles[r, c].val = 0
                        count -= 1
            combined = False

    elif direction == "u":
        for c in range(C):
            count = 0
            combined = False
            for r in range(R):
                if tiles[r, c].val > 0:
                    if not combined:
                        if count > 0 and tiles[count - 1, c].val == tiles[r, c].val:
                            tiles[count - 1, c].val *= 2
                            gameScore += tiles[count - 1, c].val
                            tiles[r, c].val = 0
                            combined = True
                        else:
                            if count != r:
                                tiles[count, c].val = tiles[r, c].val
                                tiles[r, c].val = 0
                            count += 1
                    else:
                        tiles[count, c].val = tiles[r, c].val
                        if count != r:
                            tiles[r, c].val = 0
                        count += 1
            combined = False

    elif direction == "d":
        for c in range(C):
            count = R - 1
            combined = False
            for r in range(R - 1, -1, -1):
                if tiles[r, c].val > 0:
                    if not combined:
                        if count < R - 1 and tiles[count + 1, c].val == tiles[r, c].val:
                            tiles[count + 1, c].val *= 2
                            gameScore += tiles[count + 1, c].val
                            tiles[r, c].val = 0
                            combined = True
                        else:
                            if count != r:
                                tiles[count, c].val = tiles[r, c].val
                                tiles[r, c].val = 0
                            count -= 1
                    else:
                        tiles[count, c].val = tiles[r, c].val
                        if count != r:
                            tiles[r, c].val = 0
                        count -= 1
            combined = False

    addRandomTile()
    
def moveTilesNoWindowMaxTile(direction):
    global gameScore
    if direction == "l":
        for r in range(R):
            count = 0
            combined = False
            for c in range(C):
                if tiles[r, c].val > 0:
                    if not combined:
                        if count > 0 and tiles[r, count - 1].val == tiles[r, c].val:
                            tiles[r, count - 1].val *= 2
                            if (tiles[r, count - 1].val > gameScore):
                                gameScore = tiles[r, count - 1].val
                            tiles[r, c].val = 0
                            combined = True
                        else:
                            if count != c:
                                tiles[r, count].val = tiles[r, c].val
                                tiles[r, c].val = 0
                            count += 1
                    else:
                        tiles[r, count].val = tiles[r, c].val
                        if count != c:
                            tiles[r, c].val = 0
                        count += 1
            combined = False

    elif direction == "r":
        for r in range(R):
            print(R)
            count = C - 1
            combined = False
            for c in range(C - 1, -1, -1):
                if tiles[r, c].val > 0:
                    if not combined:
                        if count < C - 1 and tiles[r, count + 1].val == tiles[r, c].val:
                            tiles[r, count + 1].val *= 2
                            if (tiles[r, count + 1].val > gameScore):
                                gameScore = tiles[r, count + 1].val
                                print("changing game score")
                            tiles[r, c].val = 0
                            combined = True
                        else:
                            if count != c:
                                tiles[r, count].val = tiles[r, c].val
                                tiles[r, c].val = 0
                            count -= 1
                    else:
                        tiles[r, count].val = tiles[r, c].val
                        if count != c:
                            tiles[r, c].val = 0
                        count -= 1
            combined = False

    elif direction == "u":
        for c in range(C):
            count = 0
            combined = False
            for r in range(R):
                if tiles[r, c].val > 0:
                    if not combined:
                        if count > 0 and tiles[count - 1, c].val == tiles[r, c].val:
                            tiles[count - 1, c].val *= 2
                            if (tiles[count - 1, c].val > gameScore):
                                gameScore = tiles[count - 1, c].val
                            tiles[r, c].val = 0
                            combined = True
                        else:
                            if count != r:
                                tiles[count, c].val = tiles[r, c].val
                                tiles[r, c].val = 0
                            count += 1
                    else:
                        tiles[count, c].val = tiles[r, c].val
                        if count != r:
                            tiles[r, c].val = 0
                        count += 1
            combined = False

    elif direction == "d":
        for c in range(C):
            count = R - 1
            combined = False
            for r in range(R - 1, -1, -1):
                if tiles[r, c].val > 0:
                    if not combined:
                        if count < R - 1 and tiles[count + 1, c].val == tiles[r, c].val:
                            tiles[count + 1, c].val *= 2
                            if (tiles[count + 1, c].val > gameScore):
                                gameScore = tiles[count + 1, c].val
                            tiles[r, c].val = 0
                            combined = True
                        else:
                            if count != r:
                                tiles[count, c].val = tiles[r, c].val
                                tiles[r, c].val = 0
                            count -= 1
                    else:
                        tiles[count, c].val = tiles[r, c].val
                        if count != r:
                            tiles[r, c].val = 0
                        count -= 1
            combined = False

#------------------------------------------------------------------------------

class tempTile: 
        
    def __init__(self, newVal):
        self.val = newVal
    
class tile: 
    
    def __init__(self, newRow, newCol):
        self.r = newRow
        self.c = newCol
        self.val = 0
        self.button = tk.Button(master=window, bg=GREY, width=6, height=4, text="") 
        self.button.grid(row = newRow, column = newCol)
        
def debug(opt=""):
    for r in range(R):
        for c in range(C):
            debugTiles[r,c] = tiles[r,c].val
    print(debugTiles)

#@jit(nopython=True)        
def addRandomTile(inGame = False):
    global tiles, movesCount
    emptyLocs = []
    for r in range(R):
        for c in range(C):
            if (tiles[r,c].val == 0):
                emptyLocs.append([r,c])
    if (len(emptyLocs) > 0):
        if (inGame):
            movesCount += 1
            movesTile["text"] = movesCount
        newLocNum = random.randint(0, len(emptyLocs) - 1)
        newR = emptyLocs[newLocNum][0]
        newC = emptyLocs[newLocNum][1]
        chance = random.randint(1,10)
        if (chance < 10):
            tiles[newR,newC].val = 2
        else: 
            tiles[newR,newC].val = 4

#@jit(nopython=True)
def moveTiles(direction):
    global gameScore, movesCount
    
    if direction == "l":
        for r in range(R):
            count = 0
            combined = False
            for c in range(C):
                if tiles[r, c].val > 0:
                    if not combined:
                        if count > 0 and tiles[r, count - 1].val == tiles[r, c].val:
                            tiles[r, count - 1].val *= 2
                            gameScore += tiles[r, count - 1].val 
                            tiles[r, c].val = 0
                            combined = True
                        else:
                            if count != c:
                                tiles[r, count].val = tiles[r, c].val
                                tiles[r, c].val = 0
                            count += 1
                    else:
                        tiles[r, count].val = tiles[r, c].val
                        if count != c:
                            tiles[r, c].val = 0
                        count += 1
            combined = False

    elif direction == "r":
        for r in range(R):
            count = C - 1
            combined = False
            for c in range(C - 1, -1, -1):
                if tiles[r, c].val > 0:
                    if not combined:
                        if count < C - 1 and tiles[r, count + 1].val == tiles[r, c].val:
                            tiles[r, count + 1].val *= 2
                            gameScore += tiles[r, count + 1].val 
                            tiles[r, c].val = 0
                            combined = True
                        else:
                            if count != c:
                                tiles[r, count].val = tiles[r, c].val
                                tiles[r, c].val = 0
                            count -= 1
                    else:
                        tiles[r, count].val = tiles[r, c].val
                        if count != c:
                            tiles[r, c].val = 0
                        count -= 1
            combined = False

    elif direction == "u":
        for c in range(C):
            count = 0
            combined = False
            for r in range(R):
                if tiles[r, c].val > 0:
                    if not combined:
                        if count > 0 and tiles[count - 1, c].val == tiles[r, c].val:
                            tiles[count - 1, c].val *= 2
                            gameScore += tiles[count - 1, c].val 
                            tiles[r, c].val = 0
                            combined = True
                        else: 
                            if count != r:
                                tiles[count, c].val = tiles[r, c].val
                                tiles[r, c].val = 0
                            count += 1
                    else:
                        tiles[count, c].val = tiles[r, c].val
                        if count != r:
                            tiles[r, c].val = 0
                        count += 1
            combined = False

    elif direction == "d":
        for c in range(C):
            count = R - 1
            combined = False
            for r in range(R - 1, -1, -1):
                if tiles[r, c].val > 0:
                    if not combined:
                        if count < R - 1 and tiles[count + 1, c].val == tiles[r, c].val:
                            tiles[count + 1, c].val *= 2
                            gameScore += tiles[count + 1, c].val 
                            tiles[r, c].val = 0
                            combined = True
                        else:
                            if count != r:
                                tiles[count, c].val = tiles[r, c].val
                                tiles[r, c].val = 0
                            count -= 1
                    else:
                        tiles[count, c].val = tiles[r, c].val
                        if count != r:
                            tiles[r, c].val = 0
                        count -= 1
            combined = False

    addRandomTile(inGame = True)
    buildBoard()

#@jit(nopython=True)                         
def up(opt=""):
    moveTiles("u")
#@jit(nopython=True)
def down(opt=""):
    moveTiles("d")
#@jit(nopython=True)
def left(opt=""):
    moveTiles("l")
#@jit(nopython=True)
def right(opt=""):
    moveTiles("r")

#@jit(nopython=True)
def rgb_to_hex(rgb):
    return '%02x%02x%02x' % rgb

#@jit(nopython=True)
def calcExpRatio(tileVal):
    expVal = 0
    while tileVal > 1:
        tileVal /= 2
        expVal += 1
    if ((expVal / ((R*C) / 2)) > 1):
        return (expVal / ((R*C) / 2)) - 1
    return expVal / ((R*C) / 2)

#@jit(nopython=True)
def buildBoard():
    scoreTile["text"] = gameScore
    
    for r in range(R):
        for c in range(C):
            
            if (tiles[r,c].val == 0):
                tiles[r,c].button["text"] = ""
                tiles[r,c].button["bg"] = GREY  
            else: 
                tiles[r,c].button["text"] = f"{tiles[r,c].val}"
            
            if tiles[r,c].val > 0:
                if "g-" in theme:
                    if theme == "g-green-yellow":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(255-((calcExpRatio(tiles[r,c].val))*255)),255,0))
                    if theme == "g-green-cyan":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((0,255,round(255-((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "g-blue-cyan":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((0,round(255-((calcExpRatio(tiles[r,c].val))*255)),255))
                    if theme == "g-blue-magenta":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(255-((calcExpRatio(tiles[r,c].val))*255)),0,255))
                    if theme == "g-red-magenta":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((255,0,round(255-((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "g-red-yellow":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((255,round(255-((calcExpRatio(tiles[r,c].val))*255)),0))
                
                elif "g2-" in theme:
                    if theme == "g2-yellow-green":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(((calcExpRatio(tiles[r,c].val))*255)),255,0))
                    if theme == "g2-cyan-green":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((0,255,round(((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "g2-cyan-blue":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((0,round(((calcExpRatio(tiles[r,c].val))*255)),255))
                    if theme == "g2-magenta-blue":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(((calcExpRatio(tiles[r,c].val))*255)),0,255))
                    if theme == "g2-magenta-red":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((255,0,round(((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "g2-yellow-red":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((255,round(((calcExpRatio(tiles[r,c].val))*255)),0))
                
                elif "cb-" in theme:
                    if theme == "cb-green-black":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((0,round(((calcExpRatio(tiles[r,c].val))*255)),0))
                    if theme == "cb-blue-black":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((0,0,round(((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "cb-red-black":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(((calcExpRatio(tiles[r,c].val))*255)),0,0))
                    if theme == "cb-yellow-black":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(((calcExpRatio(tiles[r,c].val))*255)),round(((calcExpRatio(tiles[r,c].val))*255)),0))
                    if theme == "cb-magenta-black":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(((calcExpRatio(tiles[r,c].val))*255)),0,round(((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "cb-cyan-black":    
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((0,round(((calcExpRatio(tiles[r,c].val))*255)),round(((calcExpRatio(tiles[r,c].val))*255))))
                
                elif "cw-" in theme:
                    if theme == "cw-green-white":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(255-((calcExpRatio(tiles[r,c].val))*255)),255,round(255-((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "cw-blue-white":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(255-((calcExpRatio(tiles[r,c].val))*255)),round(255-((calcExpRatio(tiles[r,c].val))*255)),255))
                    if theme == "cw-red-white":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((255,round(255-((calcExpRatio(tiles[r,c].val))*255)),round(255-((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "cw-yellow-white":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((255,255,round(255-((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "cw-magenta-white":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((255,round(255-((calcExpRatio(tiles[r,c].val))*255)),255))
                    if theme == "cw-cyan-white":    
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(255-((calcExpRatio(tiles[r,c].val))*255)),255,255))
                
                elif "gp-" in theme:
                    if theme == "gp-green-blue":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(255-((calcExpRatio(tiles[r,c].val))*255)),round(((calcExpRatio(tiles[r,c].val))*255)),0))
                    if theme == "gp-green-red":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((0,round(((calcExpRatio(tiles[r,c].val))*255)),round(255-((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "gp-blue-green":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((0,round(255-((calcExpRatio(tiles[r,c].val))*255)),round(((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "gp-blue-red":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(255-((calcExpRatio(tiles[r,c].val))*255)),0,round(((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "gp-red-green":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(((calcExpRatio(tiles[r,c].val))*255)),round(255-((calcExpRatio(tiles[r,c].val))*255)),0))
                    if theme == "gp-red-blue":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(((calcExpRatio(tiles[r,c].val))*255)),0,round(255-((calcExpRatio(tiles[r,c].val))*255))))
                
                elif "gs-" in theme: 
                    if theme == "gs-yellow-cyan":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(((calcExpRatio(tiles[r,c].val))*255)),255,round(255-((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "gs-yellow-magenta":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((255,round(((calcExpRatio(tiles[r,c].val))*255)),round(255-((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "gs-magenta-yellow":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((255,round(255-((calcExpRatio(tiles[r,c].val))*255)),round(((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "gs-magenta-cyan":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(((calcExpRatio(tiles[r,c].val))*255)),round(255-((calcExpRatio(tiles[r,c].val))*255)),255))
                    if theme == "gs-cyan-yellow":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(255-((calcExpRatio(tiles[r,c].val))*255)),255,round(((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "gs-cyan-magenta":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(255-((calcExpRatio(tiles[r,c].val))*255)),round(((calcExpRatio(tiles[r,c].val))*255)),255))
                
                elif "go-" in theme:
                    if theme == "go-red-cyan":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(((calcExpRatio(tiles[r,c].val))*255)),round(255-((calcExpRatio(tiles[r,c].val))*255)),round(255-((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "go-green-magenta":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(255-((calcExpRatio(tiles[r,c].val))*255)),round(((calcExpRatio(tiles[r,c].val))*255)),round(255-((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "go-blue-yellow":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(255-((calcExpRatio(tiles[r,c].val))*255)),round(255-((calcExpRatio(tiles[r,c].val))*255)),round(((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "go-cyan-red":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(255-((calcExpRatio(tiles[r,c].val))*255)),round(((calcExpRatio(tiles[r,c].val))*255)),round(((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "go-magenta-green":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(((calcExpRatio(tiles[r,c].val))*255)),round(255-((calcExpRatio(tiles[r,c].val))*255)),round(((calcExpRatio(tiles[r,c].val))*255))))
                    if theme == "go-yellow-blue":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((round(((calcExpRatio(tiles[r,c].val))*255)),round(((calcExpRatio(tiles[r,c].val))*255)),round(255-((calcExpRatio(tiles[r,c].val))*255))))
                
                elif "r-" not in theme:
                    if theme == "green":
                        tiles[r,c].button["bg"] = "#00ff00"
                    if theme == "blue":
                        tiles[r,c].button["bg"] = "#0000ff"
                    if theme == "red":
                        tiles[r,c].button["bg"] = "#ff0000"
                    if theme == "yellow":
                        tiles[r,c].button["bg"] = "#ffff00"
                    if theme == "magenta":
                        tiles[r,c].button["bg"] = "#ff00ff"
                    if theme == "cyan":
                        tiles[r,c].button["bg"] = "#00ffff"
                    if theme == "black":
                        tiles[r,c].button["bg"] = "#000000"
                        
                else:
                    if theme == "r-all":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((random.randint(0, 255),random.randint(0, 255),random.randint(0, 255)))
                    if theme == "r-green":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex(0,random.randint(0, 255),0)
                    if theme == "r-blue":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((0,0,random.randint(0, 255)))
                    if theme == "r-red":
                        tiles[r,c].button["bg"] = "#" + rgb_to_hex((random.randint(0, 255),0,0))
      
mode = input("press enter for standard mode or type any letter for custom settings: ")
if (mode == ""):
    R = 4
    C = 4
    theme = "g-red-yellow"
    DEPTH = 2
    ACC = 3
    minEmptyTiles = 0
    addNewTiles = True
    threeDirection = True
    switchSearch = False
elif (mode == "test"):
    R = 4
    C = 4
    ACC = int(input("what accuracy number do you want to use: "))
    testsPerDepth = int(input("how many tests do you want to run per search depth: "))
    depthMin = int(input("what is the starting depth you want to use: "))
    depthMax = int(input("what is the ending depth you want to use: "))    
    minEmptyTiles = int(input("what is the minimum nuber of emty tiles you want after predicted moves: "))
    
    if (input("do you want addNewTiles set to True (y or n)") == "y"):
        print("addNewTiles set to True")
        addNewTiles = True
    else: 
        print("addNewTiles set to False")
        addNewTiles = False
        
    if (input("do you want threeDirection set to True (y or n)") == "y"):
        print("threeDirection set to True")
        threeDirection = True
    else: 
        print("threeDirection set to False")
        threeDirection = False    
        
    if (input("do you want switchSearch set to True (y or n)") == "y"):
        print("switchSearch set to True")
        switchSearch = True
    else: 
        print("switchSearch set to False")
        switchSearch = False 
        
else: 
    DEPTH = 2
    ACC = 3
    minEmptyTiles = 0
    addNewTiles = True
    threeDirection = True
    switchSearch = False
    while True:
        R = int(input("enter the number of rows on the board: "))
        C = int(input("enter the number of columns on the board: "))
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
        if (R > 1 and C > 1): 
            break
        
window = tk.Tk()
window.geometry(f"{52*(C+1)}x{71*R}")
window.title("2048")   

window.bind("<Up>",up)
window.bind("<w>",up)
window.bind("<Down>",down)
window.bind("<s>",down)
window.bind("<Right>",right)
window.bind("<d>",right)
window.bind("<Left>",left)
window.bind("<a>",left)
window.bind("<p>",debug)
window.bind("<m>",aiMove)
           
tiles = np.array([[tile(0, 0)]])      
tiles.resize(R, C)
debugTiles = np.array([[]])      
debugTiles.resize(R, C)

for r in range(R):
    for c in range(C):
        tiles[r,c] = tile(r, c)
scoreLabel = tk.Button(master=window, bg=GREY, width=6, height=4, text="score:")
scoreTile = tk.Button(master=window, bg=GREY, width=6, height=4, text="0")
scoreLabel.grid(row = 0,column = C)
scoreTile.grid(row = 1,column = C)

movesLabel = tk.Button(master=window, bg=GREY, width=6, height=4, text="moves:")
movesTile = tk.Button(master=window, bg=GREY, width=6, height=4, text="0")
movesLabel.grid(row = 2,column = C)
movesTile.grid(row = 3,column = C)
        
addRandomTile()
addRandomTile()

aiMovesCounter = 0
bestMove = ""
gameScore = 0
movesCount = 0

if ("test" not in mode):
    allMoves = generateMoves(DEPTH)
    buildBoard()
    window.mainloop()
else:
    results = np.array([[0]])
    results.resize(depthMax - depthMin + 1, testsPerDepth)
    for r in range(0, depthMax - depthMin + 1):
        for c in range(testsPerDepth):
            results[r,c] = getAiMaxTile(depthMin + r)
    depths = [x for x in range(depthMin, depthMax + 1)]  
    resultsAverages = np.mean(results, axis=1) / 10000
    plt.bar(depths, resultsAverages)
    plt.title(f'average scores from search depth of {depthMin} to {depthMax} (y axis scaled down 10k times)')
    plt.show()
            