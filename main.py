import blinker
import os
import thread
from datetime import datetime


mil = int(str(datetime.now())[-5:])

currcode = mil%255

while True:
	os.system('clear')
	blinker.blinker(currcode)	
	os.system('clear')
	currcode = input("Enter another code between 0 and 255: ")
