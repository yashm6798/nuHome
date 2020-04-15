from nuHome_app.models import *
from django.http import HttpResponse
import json
import time
from django.contrib.auth.models import *
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers

# STATUS CODE 200 = OKAY
# STATUS CODE 400 = ERROR


def create_post(request):

	# This function does not require a GET method

	if request.method == 'POST':

		# Load json from request into a dictionary
		params = json.loads(request.body)
		# Create a new Post object
		new_post = Post(user=request.user, title=params['title'], content=params['content'], category=params['category'], date_time=int(time.time()))
		# Save to the db
		new_post.save()
		# Build json response 
		response = json.dumps({'status': 'ok', 'res': {'post_id': new_post.id}})
		status = 200
		return HttpResponse(response, content_type='application/json', status=status)


def update_post_status(request):

	# This function does not require a GET method

	if request.method == 'PUT':

		# Load json from request into a dictionary
		params = json.loads(request.body)
		# Retrieve post for which status is to be updated
		post = Post.objects.get(id=params['post_id'])
		# Update status of the post
		post.status = params['status']
		# Save back to the db
		post.save()
		# Build json response
		response = json.dumps({'status': 'ok', 'res': {'post_id': post.id}})
		status = 200
		return HttpResponse(response, content_type='application/json', status=status)


def delete_post(request):

	# This function does not require a GET method

	if request.method == 'DELETE':

		# Load json from the request into a dictionary
		params = json.loads(request.body)
		# Retrieve post object to be deleted
		post = Post.objects.get(id=params['post_id'])
		# Check that post exists in db
		if post is not None:
			# Delete the post from the db
			post.delete()
			status = 200
			# Build json response
			response = json.dumps({'status': 'ok', 'res': {'post_id': params['id']}})
		else:
			# Return error
			status = 400
			# Build json response
			response = json.dumps({'status': 'err', 'res': {'message': 'No post found'}})
		
		return HttpResponse(response, content_type='application/json', status=status)


def get_posts(request):

	if request.method == 'GET':

		if Refugee_Profile.objects.filter(user=request.user).exists():
				user_profile = Refugee_Profile.objects.get(user=request.user)
				region = user_profile.region


		elif NGO_Profile.objects.filter(user=request.user).exists():
				user_profile = NGO_Profile.objects.get(user=request.user)
				region = user_profile.region


		# Retrieve all posts from the db which are made by refugees from the same region
		refugee_posts = Post.objects.exclude(user__in=User.objects.filter(refugee_profile__isnull=True)).filter(user__in=User.objects.filter(refugee_profile__region=region))
		# Retrieve all posts from the db which are made by ngo users from the same region
		ngo_posts = Post.objects.exclude(user__in=User.objects.filter(ngo_profile__isnull=True)).filter(user__in=User.objects.filter(ngo_profile__region=region))
		# Append all posts together
		all_posts = refugee_posts.union(ngo_posts).order_by('date_time')
		# Initialze an empty list where all posts will be added in form of dictionary. This is done as querysets are not serializable so we convert them to list
		posts = []
		# Add all posts to the list
		for post in all_posts:
			user = post.user
			posts.append({'post_id': post.id, 'user': {'username': request.user.username, 'bio': user_profile.bio, 'avatar': user_profile.avatar}, 'title': post.title, 'content': post.content, 'category': post.category, 'status': post.status, 'date_time': post.date_time*1000})

		status = 200
		# Build json response
		response = json.dumps({'status': 'ok', 'res': posts})
		
		return HttpResponse(response, content_type='application/json', status=status)

