from cryptography.fernet import Fernet
import sys

def load_key(path):	
	# Load the key from the current directory named `key.key`
	return open(path, "rb").read()

def decrypt(filename, key):
	# Create a Fernet object first
	f = Fernet(key)
	# Set path to documents folder
	path = filename
	# Read the encrypted data
	with open(path, "rb") as file:
		encrypted_data = file.read()
	# Decrypt data using decrypt function
	decrypted_data = f.decrypt(encrypted_data)
	# Overwrite the original file
	with open("%s.pdf" % path, "wb") as file:
		file.write(decrypted_data)


if __name__ == '__main__':
	if len(sys.argv) == 3:
		file = sys.argv[1]
		key = load_key(sys.argv[2])
		decrypt(file, key)

	else:
		print("Please run the command as python3 decrypt.py <file_path> <key_path>")