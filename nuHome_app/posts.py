from nuHome_app.models import *
from django.http import HttpResponse
import json
import time
from django.contrib.auth.models import *
from django.views.decorators.csrf import csrf_exempt

# STATUS CODE 200 = OKAY
# STATUS CODE 400 = ERROR


def create_post(request):

	# This function does not require a GET method

	if request.method == 'POST':

		# Load json from request into a dictionary
		params = json.loads(request.body)
		# Create a new Post object
		new_post = Post(user=request.user, title=params['title'], content=params['content'], category=params['category'], date_time=int(time.time()*1000))
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
		post = Post.objects.get(id=params['id'])
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
		post = Post.objects.get(id=params['id'])
		# Check that post exists in db
		if post is not None:
			# Delete the post from the db
			post.delete()
			status = 200
			# Build json response
			response = json.dumps({'status': 'err', 'res': {'message': 'No post found'}})
		else:
			# Return error
			status = 400
			# Build json response
			response = json.dumps({'status': 'ok', 'res': {'post_id': params['id'], 'status'}})
		
		return HttpResponse(response, content_type='application/json', status=status)


def get_posts(request):

	if request.method == 'GET':

		# Load json from the request into a dictionary
		params = json.loads(request.body)
		# Retrieve all posts from the db which are posted by a user in the specific region
		posts = Post.objects.filter(user.region=params['region']).order_by('date_time')
		status = 200
		# Build json response
		response = json.dumps({'status': 'ok', 'res': posts})
		
		return HttpResponse(response, content_type='application/json', status=status)

