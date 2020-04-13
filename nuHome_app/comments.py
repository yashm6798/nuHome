from nuHome_app.models import Comment, Post
from django.http import HttpResponse
import json
import time
from django.contrib.auth.models import *
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers

# STATUS CODE 200 = OKAY
# STATUS CODE 400 = ERROR


def create_comment(request):

	# This function does not require a GET method

	if request.method == 'POST':

		# Load json from request into a dictionary
		params = json.loads(request.body)
		# Create a new Comment object
		new_comment = Comment(user=request.user, content=params['content'], post=Post.objects.get(id=params['id']), date_time=int(time.time()))
		# Save to the db
		new_comment.save()
		# Build json response 
		response = json.dumps({'status': 'ok', 'res': {'comment_id': new_comment.id, 'post_id': new_comment.post.id}})
		status = 200
		return HttpResponse(response, content_type='application/json', status=status)


def delete_comment(request):

	# This function does not require a GET method

	if request.method == 'DELETE':

		# Load json from the request into a dictionary
		params = json.loads(request.body)
		# Retrieve comment object to be deleted
		comment = Comment.objects.get(id=params['comment_id'])
		# Check that comment exists in db
		if comment is not None:
			# Delete the comment from the db
			comment.delete()
			status = 200
			# Build json response
			response = json.dumps({'status': 'ok', 'res': {'comment_id': params['comment_id']}})
		else:
			# Return error
			status = 400
			# Build json response
			response = json.dumps({'status': 'err', 'res': {'message': 'No comment found'}})
		
		return HttpResponse(response, content_type='application/json', status=status)


def get_comments(request):

	if request.method == 'GET':

		# Find post for which comments are needed
		post = Post.objects.get(id=request.GET.get('post_id'))
		# Retrieve all comments for that post
		all_comments = Comment.objects.filter(post=post)
		# Initialze an empty list where all comments will be added in form of dictionary. This is done as querysets are not serializable so we convert them to list
		comments = []
		# Add all comments to the list
		for comment in all_comments:
			comments.append({'comment_id': comment.id, 'username': comment.user.username, 'content': post.content, 'date_time': post.date_time*1000, 'post_id': comment.post.id})

		status = 200
		# Build json response
		response = json.dumps({'status': 'ok', 'res': comments})
		return HttpResponse(response, content_type='application/json', status=status)

