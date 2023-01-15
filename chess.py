import numpy as np
import tkinter as tk

images = {
    "yc" : "♜",
    "yn" : "♞",
    "yb" : "♝",
    "yk" : "♚",
    "yq" : "♛",
    "yp" : "♟",
    "xc" : "♖",
    "xn" : "♘",
    "xb" : "♗",
    "xk" : "♔",
    "xq" : "♕",
    "xp" : "♙",
    "-=" : " ",
}

colors = {
    "w" : "#FFFFFF",
    "b" : "#964B00",
}

class spot:
    
    def __init__(self,r,c,piece,color):
        self.r = r
        self.c = c
        self.team = piece[1]
        self.piece = piece[0:2]
        self.image = images[piece[0:2]]
        self.id = piece
        self.default = colors[color]
        self.color = colors[color]
        self.button = tk.Button(master = window, command = self.pressed, width = 2, text = self.image, bg = self.color, font = ("arial", 25))
        self.button.grid(row = self.r, column = self.c)      
        
    def pressed(self, op = ""):
        print(f"piece : {self.image}  / r : {self.r} / c : {self.c}")
        moves = []
        if "=" in self.piece:
            pass
        
        # checks for moves black pawns can make
        if self.piece == "xp":
            if "=" in board[self.r - 1,self.c].piece:
                moves.append((self.r - 1,self.c))
            if self.c != 7:
                if "=" not in board[self.r - 1,self.c + 1].piece:
                    moves.append((self.r - 1,self.c + 1))
            if self.c != 0:
                if "=" not in board[self.r - 1,self.c - 1].piece:
                    moves.append((self.r - 1,self.c - 1))        
            print(f"moves : {moves}\n")   
            
        # checks for moves white pawns can make 
        elif self.piece == "yp":
            if "=" in board[self.r + 1,self.c].piece:
                moves.append((self.r + 1,self.c))
            if self.c != 7:
                if "=" not in board[self.r + 1,self.c + 1].piece:
                    moves.append((self.r + 1,self.c + 1))
            if self.c != 0:
                if "=" not in board[self.r + 1,self.c - 1].piece:
                    moves.append((self.r + 1,self.c - 1))        
            print(f"moves : {moves}\n")
            
        # checks for moves rook can make
        elif "r" in self.piece:
            for i in range(1,8):
                if self.c + i == 8:
                    break
                if "=" in board[self.r, self.c + i]:
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
                if "=" in board[self.r + i, self.c]:
                    moves.append((self.r + i,self.c))
                else:
                    if board[self.r + i, self.c].team == self.team:
                        break
                    else:
                        moves.append((self.r + i,self.c))
                        break
            for i in range(1,8):
                if self.c - i == 8:
                    break
                if "=" in board[self.r, self.c - i]:
                    moves.append((self.r,self.c - i))
                else:
                    if board[self.r, self.c - i].team == self.team:
                        break
                    else:
                        moves.append((self.r,self.c - i))
                        break
            for i in range(1,8):
                if self.r - i == 8:
                    break
                if "=" in board[self.r - i, self.c]:
                    moves.append((self.r - i,self.c))
                else:
                    if board[self.r - i, self.c].team == self.team:
                        break
                    else:
                        moves.append((self.r - i,self.c))
                        break                                     
                        
window = tk.Tk()

board = np.array([
    [spot(0,0,"yc","w"),spot(0,1,"yn","b"),spot(0,2,"yb","w"),spot(0,3,"yk","b"),spot(0,4,"yq","w"),spot(0,5,"yb","b"),spot(0,6,"yn","w"),spot(0,7,"yc","b")],
    [spot(1,0,"yp","b"),spot(1,1,"yp","w"),spot(1,2,"yp","b"),spot(1,3,"yp","w"),spot(1,4,"yp","b"),spot(1,5,"yp","w"),spot(1,6,"yp","b"),spot(1,7,"yp","w")],
    [spot(2,0,"-=","w"),spot(2,1,"-=","b"),spot(2,2,"-=","w"),spot(2,3,"-=","b"),spot(2,4,"-=","w"),spot(2,5,"-=","b"),spot(2,6,"-=","w"),spot(2,7,"-=","b")],
    [spot(3,0,"-=","b"),spot(3,1,"-=","w"),spot(3,2,"-=","b"),spot(3,3,"-=","w"),spot(3,4,"-=","b"),spot(3,5,"-=","w"),spot(3,6,"-=","b"),spot(3,7,"-=","w")],
    [spot(4,0,"-=","w"),spot(4,1,"-=","b"),spot(4,2,"-=","w"),spot(4,3,"-=","b"),spot(4,4,"-=","w"),spot(4,5,"-=","b"),spot(4,6,"-=","w"),spot(4,7,"-=","b")],
    [spot(5,0,"-=","b"),spot(5,1,"-=","w"),spot(5,2,"-=","b"),spot(5,3,"-=","w"),spot(5,4,"-=","b"),spot(5,5,"-=","w"),spot(5,6,"-=","b"),spot(5,7,"-=","w")],
    [spot(6,0,"xp","w"),spot(6,1,"xp","b"),spot(6,2,"xp","w"),spot(6,3,"xp","b"),spot(6,4,"xp","w"),spot(6,5,"xp","b"),spot(6,6,"xp","w"),spot(6,7,"xp","b")],
    [spot(7,0,"xc","b"),spot(7,1,"xn","w"),spot(7,2,"xb","b"),spot(7,3,"xk","w"),spot(7,4,"xq","b"),spot(7,5,"xb","w"),spot(7,6,"xn","b"),spot(7,7,"xc","w")]
])

window.title("Chess")
window.geometry("384x535")
window.mainloop()