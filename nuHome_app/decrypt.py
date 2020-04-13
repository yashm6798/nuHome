from cryptography.fernet import Fernet
import sys

def load_key():	
	#Load the key from the current directory named `key.key`
	return open("key.key", "rb").read()

def decrypt(filename, key):

	# Create a Fernet object first
	f = Fernet(key)
	# Read the encrypted data
	with open(filename, "rb") as file:
		encrypted_data = file.read()
	# Decrypt data using decrypt function
	decrypted_data = f.decrypt(encrypted_data)
	# Overwrite the original file
	with open(filename, "wb") as file:
		file.write(decrypted_data)

if len(sys.argv) == 2:
	
	file = sys.argv[1]
	key = load_key()
	decrypt(file, key)

else:
	print("Please run the command as python decryption.py <filename>")