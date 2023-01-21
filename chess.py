import numpy as np
import tkinter as tk
import random as ran

def highlight(moves):
    global board
    for cord in moves:
        board[cord[0],cord[1]].button["bg"] = colors["y"]
        
def reset(op=""):
    for r in range(8):
        for c in range(8):
            if "k" not in board[r,c].piece:
                board[r,c].button["bg"] = board[r,c].color
            
def check(r,c):
    board[r,c].button["bg"] = colors["r"]
            
def is_check(r,c,t,o,team):
    
    # checks if black pawns will make a check if team is white
    if team == "x":
        if r != 0 and c != 7:
            if board[r - 1,c + 1].piece == "yp":
                return True
        if r != 0 and c != 0:
            if board[r - 1,c - 1].piece == "yp":
                return True    
    
    # checks if white pawns will make a check if team is black
    if team == "y":
        if r != 7 and c != 7:
            if board[r + 1,c + 1].piece == "xp":
                return True
        if r != 7 and c != 0:
            if board[r + 1,c - 1].piece == "xp":
                return True
    
    # checks if rook will cause check
    for i in range(1,8):
        if c + i == 8:
            break
        if board[r,c + i].piece == f"{o}r":
            return True
        if board[r,c + i].team != t:
            break
    for i in range(1,8):
        if r + i == 8:
            break
        if board[r + i,c].piece == f"{o}r":
            return True
        if board[r + i,c].team != t:
            break
    for i in range(1,8):
        if c - i == 8:
            break
        if board[r,c - i].piece == f"{o}r":
            return True
        if board[r,c - i].team != t:
            break
    for i in range(1,8):
        if r - i == 8:
            break
        if board[r - i,c].piece == f"{o}r":
            return True
        if board[r - i,c].team != t:
            break
        
    # checks if knight will make check
    if r < 7 and c < 6:
        if board[r + 1,c + 2].piece == f"{o}n":
            return True
    if r < 6 and c < 7:
        if board[r + 2,c + 1].piece == f"{o}n":
            return True
    if r < 7 and c > 1:
        if board[r + 1,c - 2].piece == f"{o}n":
            return True
    if r < 6 and c < 0:
        if board[r + 2,c - 1].piece == f"{o}n":
            return True
    if r > 1 and c > 0:
        if board[r - 2,c - 1].piece == f"{o}n":
            return True
    if r > 0 and c > 1:
        if board[r - 1,c - 2].piece == f"{o}n":
            return True
    if r > 0 and c < 6:
        if board[r - 1,c + 2].piece == f"{o}n":
            return True
    if r > 1 and c < 7:
        if board[r - 2,c + 1].piece == f"{o}n":
            return True
        
    # checks if bishop will make a check
    for i in range(1,8):
        if r + i == 8 or c + i == 8:
            break
        if board[r + i,c + i].piece == f"{o}b":
            return True
        if board[r + i,c + i].team != t:
            break
    for i in range(1,8):
        if r + i == 8 or c - i == -1:
            break
        if board[r + i,c - i].piece == f"{o}b":
            return True
        if board[r + i,c].team != t:
            break
    for i in range(1,8):
        if r - i == -1 or c + i == 8:
            break
        if board[r - i,c + i].piece == f"{o}b":
            return True
        if board[r - i,c + i].team != t:
            break
    for i in range(1,8):
        if r - i == -1 or c - i == -1:
            break
        if board[r - i,c - i].piece == f"{o}b":
            return True
        if board[r - i,c - i].team != t:
            break
        
    # checks if queen will make a check 
    for i in range(1,8):
        if c + i == 8:
            break
        if board[r,c + i].piece == f"{o}q":
            return True
        if board[r,c + i].team != t:
            break
    for i in range(1,8):
        if r + i == 8:
            break
        if board[r + i,c].piece == f"{o}q":
            return True
        if board[r + i,c].team != t:
            break
    for i in range(1,8):
        if c - i == 8:
            break
        if board[r,c - i].piece == f"{o}q":
            return True
        if board[r,c - i].team != t:
            break
    for i in range(1,8):
        if r - i == 8:
            break
        if board[r - i,c].piece == f"{o}q":
            return True
        if board[r - i,c].team != t:
            break
    for i in range(1,8):
        if r + i == 8 or c + i == 8:
            break
        if board[r + i,c + i].piece == f"{o}q":
            return True
        if board[r + i,c + i].team != t:
            break
    for i in range(1,8):
        if r + i == 8 or c - i == -1:
            break
        if board[r + i,c - i].piece == f"{o}q":
            return True
        if board[r + i,c].team != t:
            break
    for i in range(1,8):
        if r - i == -1 or c + i == 8:
            break
        if board[r - i,c + i].piece == f"{o}q":
            return True
        if board[r - i,c + i].team != t:
            break
    for i in range(1,8):
        if r - i == -1 or c - i == -1:
            break
        if board[r - i,c - i].piece == f"{o}q":
            return True
        if board[r - i,c - i].team != t:
            break
        
    # checks if king will make check
    if c != 7:
        if board[r,c + 1].piece == f"{o}k":
            return True             
    if r != 7 and c != 7:
        if board[r + 1,c + 1].piece == f"{o}k":
            return True
    if r != 7:
        if board[r + 1,c].piece == f"{o}k":
            return True
    if r != 7 and c != 0:
        if board[r + 1,c - 1].piece == f"{o}k":
            return True
    if c != 0:
        if board[r,c - 1].piece == f"{o}k":
            return True
    if r != 0 and c != 0:
        if board[r - 1,c - 1].piece == f"{o}k":
            return True
    if r != 0:
        if board[r - 1,c].piece == f"{o}k":
            return True
    if r != 0 and c != 7:
        if board[r - 1,c + 1].piece == f"{o}k":
            return True
        
    return False

class spot:
    
    def __init__(self,r,c,piece,color):
        self.r = r
        self.c = c
        self.team = piece[0]
        self.piece = piece
        self.image = images[piece]
        self.color = colors[color]
        self.default = color
        self.button = tk.Button(master = window, command = self.pressed, width = 2, text = self.image, bg = self.color, font = ("arial", 25))
        self.button.grid(row = self.r, column = self.c)      
        
    def pressed(self, op = ""):
        global mode, selected_r, selected_c, turn
        
        if mode == "unselected" and self.team == turn:                    
            
            reset()
            moves = []
            
            # empty spot is pressed
            if "=" in self.piece:
                pass
            
            # checks for moves black pawns can make
            if self.piece == "yp":
                if "=" in board[self.r + 1,self.c].piece:
                    moves.append((self.r + 1,self.c))
                if self.c != 7:
                    if opp[self.team] in board[self.r + 1,self.c + 1].piece:
                        moves.append((self.r + 1,self.c + 1))
                if self.c != 0:
                    if opp[self.team] in board[self.r + 1,self.c - 1].piece:
                        moves.append((self.r + 1,self.c - 1))   
                if self.r == 1 and "=" in board[self.r + 2,self.c].piece and "=" in board[self.r + 1,self.c].piece:
                    moves.append((3,self.c))
                
            # checks for moves white pawns can make 
            elif self.piece == "xp":
                if "=" in board[self.r - 1,self.c].piece:
                    moves.append((self.r - 1,self.c))
                if self.c != 7:
                    if opp[self.team] in board[self.r - 1,self.c + 1].piece:
                        moves.append((self.r - 1,self.c + 1))
                if self.c != 0:
                    if opp[self.team] in board[self.r - 1,self.c - 1].piece:
                        moves.append((self.r - 1,self.c - 1))  
                if self.r == 6 and "=" in board[self.r - 2,self.c].piece and "=" in board[self.r - 1,self.c].piece:
                    moves.append((4,self.c))      
                
            # checks for moves rook can make
            elif "r" in self.piece:
                for i in range(1,8):
                    if self.c + i == 8:
                        break
                    if "=" in board[self.r, self.c + i].piece:
                        moves.append((self.r,self.c + i))
                    else:
                        if board[self.r, self.c + i].team == self.team:
                            break
                        else:
                            moves.append((self.r,self.c + i))
                            break
                for i in range(1,8):
                    if self.r + i == 8:
                        break
                    if "=" in board[self.r + i,self.c].piece:
                        moves.append((self.r + i,self.c))
                    else:
                        if board[self.r + i, self.c].team == self.team:
                            break
                        else:
                            moves.append((self.r + i,self.c))
                            break
                for i in range(1,8):
                    if self.c - i == -1:
                        break
                    if "=" in board[self.r, self.c - i].piece:
                        moves.append((self.r,self.c - i))
                    else:
                        if board[self.r, self.c - i].team == self.team:
                            break
                        else:
                            moves.append((self.r,self.c - i))
                            break
                for i in range(1,8):
                    if self.r - i == -1:
                        break
                    if "=" in board[self.r - i, self.c].piece:
                        moves.append((self.r - i,self.c))
                    else:
                        if board[self.r - i, self.c].team == self.team:
                            break
                        else:
                            moves.append((self.r - i,self.c))
                            break      
                
            # checks for moves knights can make
            if "n" in self.piece:
                if self.r < 7 and self.c < 6:
                    if board[self.r+1,self.c+2].team != self.team:
                        moves.append((self.r+1,self.c+2))
                if self.r < 6 and self.c < 7:
                    if board[self.r+2,self.c+1].team != self.team:
                        moves.append((self.r+2,self.c+1))
                if self.r < 7 and self.c > 1:
                    if board[self.r+1,self.c-2].team != self.team:
                        moves.append((self.r+1,self.c-2))
                if self.r < 6 and self.c > 0:
                    if board[self.r+2,self.c-1].team != self.team:
                        moves.append((self.r+2,self.c-1))
                if self.r > 0 and self.c > 1:
                    if board[self.r-1,self.c-2].team != self.team:
                        moves.append((self.r-1,self.c-2))
                if self.r > 1 and self.c > 0:
                    if board[self.r-2,self.c-1].team != self.team:
                        moves.append((self.r-2,self.c-1))
                if self.r > 0 and self.c < 6:
                    if board[self.r-1,self.c+2].team != self.team:
                        moves.append((self.r-1,self.c+2))
                if self.r > 1 and self.c < 7:
                    if board[self.r-2,self.c+1].team != self.team:
                        moves.append((self.r-2,self.c+1))
                
            # checks for moves that bishops can make
            if "b" in self.piece:
                for i in range(1,8):
                    if self.r + i == 8 or self.c + i == 8:
                        break
                    if "=" in board[self.r + i, self.c + i].piece:
                        moves.append((self.r + i,self.c + i))
                    else:
                        if board[self.r + i, self.c + i].team == self.team:
                            break
                        else:
                            moves.append((self.r + i,self.c + i))
                            break
                for i in range(1,8):
                    if self.r + i == 8 or self.c - i == -1:
                        break
                    if "=" in board[self.r + i,self.c - i].piece:
                        moves.append((self.r + i,self.c - i))
                    else:
                        if board[self.r + i, self.c - i].team == self.team:
                            break
                        else:
                            moves.append((self.r + i,self.c - i))
                            break
                for i in range(1,8):
                    if  self.r - i == -1 or self.c - i == -1:
                        break
                    if "=" in board[self.r - i, self.c - i].piece:
                        moves.append((self.r - i,self.c - i))
                    else:
                        if board[self.r - i, self.c - i].team == self.team:
                            break
                        else:
                            moves.append((self.r - i,self.c - i))
                            break
                for i in range(1,8):
                    if self.r - i == -1 or self.c + i == 8:
                        break
                    if "=" in board[self.r - i, self.c + i].piece:
                        moves.append((self.r - i,self.c + i))
                    else:
                        if board[self.r - i, self.c + i].team == self.team:
                            break
                        else:
                            moves.append((self.r - i,self.c + i))
                            break      
                
            #checks for moves queens can make
            if "q" in self.piece:
                for i in range(1,8):
                    if self.c + i == 8:
                        break
                    if "=" in board[self.r, self.c + i].piece:
                        moves.append((self.r,self.c + i))
                    else:
                        if board[self.r, self.c + i].team == self.team:
                            break
                        else:
                            moves.append((self.r,self.c + i))
                            break
                for i in range(1,8):
                    if self.r + i == 8:
                        break
                    if "=" in board[self.r + i,self.c].piece:
                        moves.append((self.r + i,self.c))
                    else:
                        if board[self.r + i, self.c].team == self.team:
                            break
                        else:
                            moves.append((self.r + i,self.c))
                            break
                for i in range(1,8):
                    if self.c - i == -1:
                        break
                    if "=" in board[self.r, self.c - i].piece:
                        moves.append((self.r,self.c - i))
                    else:
                        if board[self.r, self.c - i].team == self.team:
                            break
                        else:
                            moves.append((self.r,self.c - i))
                            break
                for i in range(1,8):
                    if self.r - i == -1:
                        break
                    if "=" in board[self.r - i, self.c].piece:
                        moves.append((self.r - i,self.c))
                    else:
                        if board[self.r - i, self.c].team == self.team:
                            break
                        else:
                            moves.append((self.r - i,self.c))
                            break
                for i in range(1,8):
                    if self.r + i == 8 or self.c + i == 8:
                        break
                    if "=" in board[self.r + i, self.c + i].piece:
                        moves.append((self.r + i,self.c + i))
                    else:
                        if board[self.r + i, self.c + i].team == self.team:
                            break
                        else:
                            moves.append((self.r + i,self.c + i))
                            break
                for i in range(1,8):
                    if self.r + i == 8 or self.c - i == -1:
                        break
                    if "=" in board[self.r + i,self.c - i].piece:
                        moves.append((self.r + i,self.c - i))
                    else:
                        if board[self.r + i, self.c - i].team == self.team:
                            break
                        else:
                            moves.append((self.r + i,self.c - i))
                            break
                for i in range(1,8):
                    if  self.r - i == -1 or self.c - i == -1:
                        break
                    if "=" in board[self.r - i, self.c - i].piece:
                        moves.append((self.r - i,self.c - i))
                    else:
                        if board[self.r - i, self.c - i].team == self.team:
                            break
                        else:
                            moves.append((self.r - i,self.c - i))
                            break
                for i in range(1,8):
                    if self.r - i == -1 or self.c + i == 8:
                        break
                    if "=" in board[self.r - i, self.c + i].piece:
                        moves.append((self.r - i,self.c + i))
                    else:
                        if board[self.r - i, self.c + i].team == self.team:
                            break
                        else:
                            moves.append((self.r - i,self.c + i))
                            break      
                
            # checks for moves kings can make
            if "k" in self.piece:
                if self.c != 7:
                    if board[self.r,self.c + 1].team != self.team and not is_check(self.r,self.c + 1,"-",opp[self.team],self.team):
                        moves.append((self.r,self.c + 1))
                if self.r != 7 and self.c != 7:
                    if board[self.r + 1,self.c + 1].team != self.team and not is_check(self.r + 1,self.c + 1,"-",opp[self.team],self.team):
                        moves.append((self.r + 1,self.c + 1))
                if self.r != 7:
                    if board[self.r + 1,self.c].team != self.team and not is_check(self.r + 1,self.c,"-",opp[self.team],self.team):
                        moves.append((self.r + 1,self.c))
                if self.r != 7 and self.c != 0:
                    if board[self.r + 1,self.c - 1].team != self.team and not is_check(self.r + 1,self.c - 1,"-",opp[self.team],self.team):
                        moves.append((self.r + 1,self.c - 1))
                if self.c != 0:
                    if board[self.r,self.c - 1].team != self.team and not is_check(self.r,self.c - 1,"-",opp[self.team],self.team):
                        moves.append((self.r,self.c - 1))
                if self.r != 0 and self.c != 0:
                    if board[self.r - 1,self.c - 1].team != self.team and not is_check(self.r - 1,self.c - 1,"-",opp[self.team],self.team):
                        moves.append((self.r - 1,self.c - 1))
                if self.r != 0:
                    if board[self.r - 1,self.c].team != self.team and not is_check(self.r - 1,self.c,"-",opp[self.team],self.team):
                        moves.append((self.r - 1,self.c))
                if self.r != 0 and self.c != 7:
                    if board[self.r - 1,self.c + 1].team != self.team and not is_check(self.r - 1,self.c + 1,"-",opp[self.team],self.team):
                        moves.append((self.r - 1,self.c + 1))
                
            if len(moves) > 0:
                mode = "selected"
            highlight(moves)
            selected_r = self.r
            selected_c = self.c

        elif mode == "selected":
            if board[self.r,self.c].button["bg"] == colors["y"]:
                reset()
                if bool(self.r == 0 or self.r == 7) and "p" in board[selected_c,selected_r].piece:
                    board[selected_r,selected_c].piece = f"{turn}q"
                board[self.r,self.c] = spot(self.r,self.c,board[selected_r,selected_c].piece,self.default)
                board[selected_r,selected_c] = spot(selected_r,selected_c,"-=",board[selected_r,selected_c].default)   
                for r in range(8):
                    for c in range(8):
                        if board[r,c].piece == f"{opp[turn]}k":
                            if is_check(r,c,"-",turn,opp[turn]):
                                check(r,c)
                
                if turn == "x":
                    turn = "y"
                else:
                    turn = "x"

            reset()
            mode = "unselected"
            
            
images = {
    "yr" : "♜",
    "yn" : "♞",
    "yb" : "♝",
    "yk" : "♚",
    "yq" : "♛",
    "yp" : "♟",
    "xr" : "♖",
    "xn" : "♘",
    "xb" : "♗",
    "xk" : "♔",
    "xq" : "♕",
    "xp" : "♙",
    "-=" : " ",
}

opp = {
    "x" : "y",
    "y" : "x"
}

colors = {
    "w" : "#FFFFFF",
    "b" : "#964B00",
    "y" : "#FFFF00",
    "r" : "#FF0000"
}

window = tk.Tk()
mode = "unselected"
selected_r, selected_c = 0,0
turn = "x"
checked = False
bot = True

board = np.array([
    [spot(0,0,"yr","w"),spot(0,1,"yn","b"),spot(0,2,"yb","w"),spot(0,3,"yk","b"),spot(0,4,"yq","w"),spot(0,5,"yb","b"),spot(0,6,"yn","w"),spot(0,7,"yr","b")],
    [spot(1,0,"yp","b"),spot(1,1,"yp","w"),spot(1,2,"yp","b"),spot(1,3,"yp","w"),spot(1,4,"yp","b"),spot(1,5,"yp","w"),spot(1,6,"yp","b"),spot(1,7,"yp","w")],
    [spot(2,0,"-=","w"),spot(2,1,"-=","b"),spot(2,2,"-=","w"),spot(2,3,"-=","b"),spot(2,4,"-=","w"),spot(2,5,"-=","b"),spot(2,6,"-=","w"),spot(2,7,"-=","b")],
    [spot(3,0,"-=","b"),spot(3,1,"-=","w"),spot(3,2,"-=","b"),spot(3,3,"-=","w"),spot(3,4,"-=","b"),spot(3,5,"-=","w"),spot(3,6,"-=","b"),spot(3,7,"-=","w")],
    [spot(4,0,"-=","w"),spot(4,1,"-=","b"),spot(4,2,"-=","w"),spot(4,3,"-=","b"),spot(4,4,"-=","w"),spot(4,5,"-=","b"),spot(4,6,"-=","w"),spot(4,7,"-=","b")],
    [spot(5,0,"-=","b"),spot(5,1,"-=","w"),spot(5,2,"-=","b"),spot(5,3,"-=","w"),spot(5,4,"-=","b"),spot(5,5,"-=","w"),spot(5,6,"-=","b"),spot(5,7,"-=","w")],
    [spot(6,0,"xp","w"),spot(6,1,"xp","b"),spot(6,2,"xp","w"),spot(6,3,"xp","b"),spot(6,4,"xp","w"),spot(6,5,"xp","b"),spot(6,6,"xp","w"),spot(6,7,"xp","b")],
    [spot(7,0,"xr","b"),spot(7,1,"xn","w"),spot(7,2,"xb","b"),spot(7,3,"xk","w"),spot(7,4,"xq","b"),spot(7,5,"xb","w"),spot(7,6,"xn","b"),spot(7,7,"xr","w")]
])
                   
window.title("Chess")
window.geometry("384x535")
window.mainloop()