import subprocess
import sys

if __name__ == '__main__':
	if len(sys.argv) == 2:
		print("Securely deleting file...")
		file = sys.argv[1]
		try:
			subprocess.call(['rm', '-P'] + [file])
			print("Deletion successful")
		except OSError:
			print ('Delete failed. Please ensure you use the correct filename and extension')
	else:
		print("Please run the command as python delete.py <file_pathe>")
		print("Also make sure to use the file extension in filename is applicable.")