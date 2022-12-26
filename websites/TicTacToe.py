# -*- coding: utf-8 -*-
"""
Created on Sat Nov 26 20:56:12 2022

@author: Carter
"""
def printBoard():
    global board
    for r in range(0,9,3):
            print(f" {board[r]} | {board[r+1]} | {board[r+2]}")
            if r != 6:
                print("---+---+---")

def play():
    global board, wins
    count = 0 # variable to keep track of the number of peices placed
    board = [" "]*9 # creates empty list of 9 board spots 
    turn = "X"
    won = False
    while True:
        print("\n" * 50)
        
        # prints the board
        printBoard()
                
        board[int(input(f"\nit is {turn}'s turn enter a number 1-9: "))-1] = turn
        count += 1
        
        # checks for win
        for i in range(0,9,3):
            if board[i] == turn and board[i+1] == turn and board[i+2] == turn: # right-left 
                won = True
        for i in range(3):
            if board[i] == turn and board[i+3] == turn and board[i+6] == turn: # up-down
                won = True
        if board[0] == turn and board[4] == turn and board[8] == turn: # top left - bottom right
            won = True
        if board[2] == turn and board[4] == turn and board[6] == turn: #top right - bottom left
            won = True
        if won: 
            break
        if count == 9:
            break
        
        if turn == "X": turn = "O"
        else: turn = "X"
        
        print("\n" * 50)
    
    print("\n" * 50)
    printBoard()    
    if count < 9:
        wins[turn] += 1
        print(f"\nplayer {turn} won")
    else:
        print("\nthat game was a tie")
    
wins = { "X" : 0, "O" : 0 }
    
while True:
    input(f"\n\nwins for X : {wins['X']} \nwins for O : {wins['O']} \npress enter to play")
    play()