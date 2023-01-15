import numpy as np
import time

def encode(string, n):
    global grid
    result = ""
    row = 0
    grid = np.array([["" for c in range(len(string))] for r in range(n)])
    for i in range(len(string)):
        grid[row,i] = string[i]
        if row == n - 1:
            direc = -1
        elif row == 0:
            direc = 1
        row += direc
    for r in range(n):
        for c in range(len(string)):
            if grid[r,c] != "":
                result += grid[r,c]
    return result
        
def decode(string, n):
    global grid
    result = ""
    row = 0
    char = ["" for i in range(len(string))]
    grid = np.array([[-1 for c in range(len(string))] for r in range(n)])
    for i in range(len(string)):
        grid[row,i] = i
        if row == n - 1:
            direc = -1
        elif row == 0:
            direc = 1
        row += direc
    placed = 0
    for r in range(n):
        for c in range(len(string)):
            if grid[r,c] != -1:
                print("\n"*50)
                char[grid[r,c]] = string[placed]
                placed += 1
                prints = ""
                for i in range(len(string)):
                    if char[i] != "":
                        prints += char[i]
                print(prints)
                time.sleep(0.1)
    for i in range(len(string)):
        result += char[i]
    return result

message = {"text" : input("enter your message: "), "encode_level" : int(input("enter encoding level for the message: "))}
if input("encode message y or n: ") == "y":
    new_message = encode(message["text"],message["encode_level"])
else:
    new_message = decode(message["text"],message["encode_level"])
print(f"\n\nthis is your message encoded at level '{message['encode_level']}' \n and this is the message : {new_message}")
