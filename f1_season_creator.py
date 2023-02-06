import random as ran
import matplotlib.pyplot as plt
import matplotlib.animation as animation

class driver():
    
    def __init__(self,name,points,team):
        self.name = name
        self.points = points
        self.team = team

drivers = [
    driver("VER","RED-BULL"),
    driver("PER","RED-BULL"),
    driver("LEC","FERARRI"),
    driver("SAI","FERARRI"),
    driver("HAM","MERCEDES"),
    driver("RUS","MERCEDES"),
    driver("NOR","MCLAREN"),
    driver("PIA","MCLAREN"),
    driver("GAS","ALPINE"),
    driver("OCO","ALPINE"),
    driver("BOT","ALFA-ROMEO"),
    driver("ZHO","ALFA-ROMEO"),
    driver("ALO","ASTON-MARTIN"),
    driver("STR","ASTON-MARTIN"),
    driver("MAG","HAAS"),
    driver("HUL","HAAS"),
    driver("TSU","ALPHA-TAURI"),
    driver("DEV","ALPHA-TAURI"),
    driver("ALB","WILLIAMS"),
    driver("SAR","WILLIAMS")
]

