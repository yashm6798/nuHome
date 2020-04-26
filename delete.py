import os
import sys

if len(sys.argv) == 2:
	
	file = sys.argv[1]
	print("Securely deleting file...")
	command = "rm -P " + file
	os.system(command)
	print("Deletion successful")

else:
	print("Please run the command as python decrypt.py <filename>")