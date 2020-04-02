from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Refugee_Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	avatar = models.FileField(blank=True)
	bio = models.TextField(blank=True)
	region = models.CharField(max_length=20)
	verification_status = models.BooleanField(default=False)

class NGO_Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	avatar = models.FileField(blank=True)
	bio = models.TextField(blank=True)
	region = models.CharField(max_length=20)

class NGO_Admin_Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	region = models.CharField(max_length=20)

class Post(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	title = models.TextField(blank=False)
	content = models.TextField(blank=False)
	STATUS_CHOICES = [('V', 'Verified'), ('U', 'Unverified'), ('F', 'False')]
	status = models.CharField(max_length=2, choices=STATUS_CHOICES)
	CATEGORY_CHOICES = [('I', 'Important'), ('S', 'Social'), ('J', 'Jobs'), ('A', 'Accommodation'), ('R', 'Resources'), ('O', 'Other')]
	category = models.CharField(max_length=2, choices=CATEGORY_CHOICES)
	date_time = models.DateTimeField(auto_now_add=True)

class Comment(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	post = models.ForeignKey(Post, on_delete = models.CASCADE)
	date_time = models.DateTimeField(auto_now_add=True)
	content = models.TextField(blank=False)

class Message(models.Model):
	from_user = models.ForeignKey(User, on_delete=models.CASCADE)
	to_user = models.ForeignKey(User, on_delete=models.CASCADE)
	date_time = models.DateTimeField(auto_now_add=True)
	content = models.TextField(blank=False)