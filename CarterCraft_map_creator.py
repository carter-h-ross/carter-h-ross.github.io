import tkinter as tk

colors = {
    "1" : "#FFFFFF", # air - cyan
    "2" : "#DFDFDF", # stone - grey
    "3" : "#964B00", # brown - dirt
    "4" : "#0AA539", # green - grass
    "0" : "#000000", # black - bedrock
}

class block:
    
    def __init__(self,x,y,z,id):
        self.x = x
        self.y = y
        self.z = z    
        self.id = id
        
def mode(opt):
    mode = opt
    
def printWorld(op=""):
    
    """
    xxx {
    xxx = {
    { // x_0
        { // y_0 
            x,x,x,x 
            x,x,x,x
        }
        
        { // y_1 
            x,x,x,x 
            x,x,x,x
        }
    }
    { // x_1
        { // y_0 
            x,x,x,x 
            x,x,x,x
        }
        { // y_1 
            x,x,x,x 
            x,x,x,x
        }
    }
    }
    }
    """
    
    print("public class Chunk0_0 {")
    print("public static Block[][][] world = {")
    for x in range(size):
        print("{ // x_" + str(x))
        
        for y in range(size):
            print("    { // y_" + str(y))
            
            print("        ",end="")
            for z in range(size):
                print(f"block({x},{y},{z}),",end="")
                if (z+1) % 4 == 0 and z != size-1:
                    print("\n        ",end="")
            
            print("\n    }")
        
        print("}")
    print("}")
    print("}")
 
size = 32
"""
level = 0
map = [[[block(x,y,z,"0") for x in range(size)] for y in range(size)] for z in range(size)]
window = tk.Tk()
buttons = [[tk.Button(master = "window", size = 1) for x in range(size)] for y in range(size)]        
"""
    
printWorld() 