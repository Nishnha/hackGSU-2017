import RPi.GPIO as GPIO
import time
from idgen import bitterator

def blinker(idnum, bitcount=8):

	bitlist = bitterator(bitcount)
	
	GPIO.setmode(GPIO.BCM)
	GPIO.setwarnings(False)
	GPIO.setup(18,GPIO.OUT)

	binID = bitlist[idnum]
	gap = .1

	print("Displaying ID <{}> of bitcode <{}>".format(idnum, bitlist[idnum]))	

	def anchor(inbits="11111111", bitrate=gap):
		GPIO.output(18,GPIO.LOW)
		time.sleep(bitrate/10)
		for digit in inbits:
			GPIO.output(18,GPIO.HIGH)
			time.sleep(bitrate)
		GPIO.output(18,GPIO.LOW)
		time.sleep(bitrate/10)
			

	def blinkID(idstring, bitrate=gap):
		for digit in idstring:
			if digit == "1":
				GPIO.output(18,GPIO.LOW)
				time.sleep(bitrate/10)
				GPIO.output(18,GPIO.HIGH)
				time.sleep(bitrate)
				GPIO.output(18,GPIO.LOW)
				time.sleep(bitrate/10)
			elif digit == "0":
				GPIO.output(18,GPIO.LOW)
				time.sleep(bitrate+bitrate/5)
			else:
				print("Unexpected character in ID")
				break
	
	try:
		while True:
			anchor()
			blinkID(binID)
	except KeyboardInterrupt:
		GPIO.output(18,GPIO.LOW)
