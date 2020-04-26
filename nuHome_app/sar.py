from nuHome_app.models import *
from django.http import HttpResponse
import json
import time
from django.contrib.auth.models import *
from django.contrib.auth import logout
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers

# STATUS CODE 200 = OKAY
# STATUS CODE 400 = ERROR

tmp_directory = "downloads/sar/"

def get_sar(request):

	if request.method == 'GET':

		isNgo = False
		# verification_status = True
		username = ''

		# Check whether user is in refugee profile
		if Refugee_Profile.objects.filter(user=request.user).exists():
			# Load username
			username = Refugee_Profile.objects.get(user=request.user).user.username
			# Load refugee object from profile
			user = Refugee_Profile.objects.get(user__username=username)

		# Check whether user is in ngo profile
		elif NGO_Profile.objects.filter(user=request.user).exists():
			username = NGO_Profile.objects.get(user=request.user).user.username
			user = NGO_Profile.objects.get(user__username=username)
			isNgo = True

		else:
			# Return error
			status = 400
			# Build json response
			response = json.dumps({'status': 'err', 'res': {'message': 'SAR not available'}})

		# Form the information to send back as a dictionary
		info = dict()
		info['avatar'] = user.avatar
		info['bio'] = user.bio
		info['region'] = user.region
		if isNgo:
			info['no_of_refugees_assigned'] = user.no_of_refugees_assigned
		else:
			# verification_status = user.verification_status
			info['verification_status'] = user.verification_status
			info['assigned_ngo'] = user.assigned_ngo.user.username

		# Collect all comments/posts/messages of the user
		all_comments = Comment.objects.filter(user=request.user)
		all_posts = Post.objects.filter(user=request.user)
		all_from_messages = Message.objects.filter(from_user=request.user)
		all_to_messages = Message.objects.filter(to_user=request.user)

		comments = []
		# Add all comments to the list
		for comment in all_comments:
			comments.append({'username': comment.user.username, \
				'content': comment.content, \
				'date_time': comment.date_time*1000, \
				'post_title': comment.post.title})

		posts = []
		# Add all posts to the list
		for post in all_posts:
			posts.append({'username': post.user.username, \
				'title': post.title, \
				'content': post.content, \
				'status': post.status, \
				'category': post.category, \
				'date_time': post.date_time*1000})

		messages = []
		# Add all messages from this user to the list
		for message in all_from_messages:
			messages.append({'from_user': message.from_user.username, \
				'to_user': message.to_user.username, \
				'content': message.content, \
				'date_time': message.date_time*1000})

		# Add all messages to this user to the list
		for message in all_to_messages:
			messages.append({'from_user': message.from_user.username, \
				'to_user': message.to_user.username, \
				'content': message.content, \
				'date_time': message.date_time*1000})

		info['comments'] = comments
		info['posts'] = posts
		info['messages'] = messages

		# Dump the information as a json object to write
		json_object = json.dumps(info, indent=4)

		# make a tmp directory to write file
		sar_directory = tmp_directory + username + '/'
		if not os.path.exists(sar_directory):
			os.makedirs(sar_directory)

		# create url
		url = sar_directory + "info.json"

		# Writing to sample.json in the tmp directory
		with open(url, "w") as outfile: 
		    outfile.write(json_object)

		# if not verification_status:
		# 	pass
		
		# Build json response
		response = json.dumps({'status': 'ok', 'res': {'url': url}})
		status = 200
		return HttpResponse(response, content_type='application/json', status=status)


