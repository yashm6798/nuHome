from django.db import models
from django.contrib.auth.models import User

# Create your models here.

def user_directory_path(instance, filename):
	# file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
	return 'user_{0}'.format(instance.user.id)

class Refugee_Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	avatar = models.CharField(blank=True, max_length=2)
	bio = models.TextField(blank=True)
	region = models.CharField(max_length=20)
	verification_status = models.BooleanField(default=False)
	verification_document = models.FileField(upload_to=user_directory_path, null=True)
	assigned_ngo = models.ForeignKey('NGO_Profile', on_delete=models.PROTECT)

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
	date_time = models.DateTimeField(auto_now_add=True)
	content = models.TextField(blank=False)