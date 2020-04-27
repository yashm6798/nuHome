from django.db import models
from django.contrib.auth.models import User
from nuHome_app.encrypt import load_key
from cryptography.fernet import Fernet
from django.core.files import File
import os
# Create your models here.

def user_directory_path(instance):
	# file will be uploaded to MEDIA_ROOT/username
	return '{0}'.format(instance.user.username)

class Refugee_Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	avatar = models.CharField(blank=True, max_length=2)
	bio = models.TextField(blank=True)
	region = models.CharField(max_length=20)
	verification_status = models.BooleanField(default=False)
	verification_document = models.FileField(upload_to=user_directory_path, null=True)
	assigned_ngo = models.ForeignKey('NGO_Profile', on_delete=models.PROTECT)

	def encrypt(self, file_object, key):

		# First initialize the Fernet object
		f = Fernet(key)
		# Read all data from the file
		with file_object.open("rb") as file:
			file_data = file.read()
		# Now encrypt this data
		encrypted_data = f.encrypt(file_data)
		# Overwrite the file original file with encrypted data
		documents_directory = "downloads/documents/"
		if not os.path.exists(documents_directory):
			os.makedirs(documents_directory)
		file_path = documents_directory + user_directory_path(self)
		with open(file_path, "wb") as file:
			file.write(encrypted_data)
			self.verification_document = file_path
			super().save()


	def save(self, verification_document_upload=False):
		if verification_document_upload == True:
			enc_key = load_key(self.assigned_ngo.user.username)
			self.encrypt(self.verification_document, enc_key)
		else:
			super().save()

class NGO_Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	avatar = models.CharField(blank=True, max_length=2)
	bio = models.TextField(blank=True)
	region = models.CharField(max_length=20)
	no_of_refugees_assigned = models.IntegerField()

class NGO_Admin_Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	region = models.CharField(max_length=20)

class Post(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	title = models.TextField(blank=False)
	content = models.TextField(blank=False)
	status = models.CharField(max_length=10, default='unverified')
	category = models.CharField(max_length=13)
	date_time = models.IntegerField()

class Comment(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	post = models.ForeignKey(Post, on_delete = models.CASCADE)
	date_time = models.DateTimeField(auto_now_add=True)
	content = models.TextField(blank=False)

class Message(models.Model):
	from_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='message_from')
	to_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='message_to')
	date_time = models.IntegerField()
	content = models.TextField(blank=False)

	def last_10_messages(user):
		from_messages = Message.objects.filter(from_user=user)
		to_messages = Message.objects.filter(to_user=user)
		return from_messages.union(to_messages).order_by('date_time').all()[:10]
