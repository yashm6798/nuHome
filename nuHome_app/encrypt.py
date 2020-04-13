from cryptography.fernet import Fernet
import os



def write_key(username):

	# Create a random symmetric key
	key = Fernet.generate_key()
	# Write the key to a file
	path = "keys/"+str(username)+"/key.key"
	with open(path, "wb") as key_file:
		key_file.write(key)


def load_key(username):
	
	#Loads the key from the current directory named `key.key`
	path = "keys/"+str(username)+"/key.key"
	return open(path, "rb").read()


def encrypt(filename, key):

	# First initialize the Fernet object
	f = Fernet(key)
	# Read all data from the file
	with open(filename, "rb") as file:
		file_data = file.read()
	# Now encrypt this data
	encrypted_data = f.encrypt(file_data)
	# Overwrite the file original file with encrypted data
	with open(filename, "wb") as file:
		file.write(encrypted_data)
