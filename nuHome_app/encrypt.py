from cryptography.fernet import Fernet


def write_key():

	# Create a random symmetric key
	key = Fernet.generate_key()
	# Write the key to a file
	with open("key.key", "wb") as key_file:
		key_file.write(key)


def load_key():
	
	#Loads the key from the current directory named `key.key`
	return open("key.key", "rb").read()


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
