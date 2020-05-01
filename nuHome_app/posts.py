from nuHome_app.models import *
from django.http import HttpResponse
import json
import time
from django.contrib.auth.models import *
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers

# STATUS CODE 200 = OKAY
# STATUS CODE 400 = ERROR




"""
@api {post} /new_post/ Create a Post
@apiName PostPost
@apiGroup Posts

@apiParam {String} title Post's title.
@apiParam {String} content Post's content.
@apiParam {String} category Post's category.

@apiSuccess {String} status Successful Create a Post.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "post_id": 8
    }
}
"""
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




"""
@api {put} /update_post_status/ Update Post Status
@apiName PutPost
@apiGroup Posts

@apiParam {Number} post_id Post's <code>id</code>.
@apiParam {String} status Post's status.

@apiSuccess {String} status Successful Update Post Status.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "post_id": 8
    }
}
"""
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




"""
@api {delete} /delete_post/ Delete a Post
@apiName DeletePost
@apiGroup Posts

@apiParam {Number} post_id Post's <code>id</code>.

@apiSuccess {String} status Successful Delete a Post.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "post_id": 8
    }
}

@apiError (Error 400) {String} NoPostFound No post found.
"""
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
			response = json.dumps({'status': 'ok', 'res': {'post_id': params['post_id']}})
		else:
			# Return error
			status = 400
			# Build json response
			response = json.dumps({'status': 'err', 'res': {'message': 'No post found'}})
		
		return HttpResponse(response, content_type='application/json', status=status)





"""
@api {get} /get_all_posts/ Select all Posts 
@apiName GetPost
@apiGroup Posts

@apiSuccess {String} status Successful Select all Posts.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": [
        {
            "username": "alpaca",
            "post_id": 1,
            "title": "Food Resources Nearby",
            "content": "Free food distribution for refugees at Frobes Ave!",
            "status": "unverified",
            "category": "living",
            "date_time": "2020-01-01 19:00:00 GMT+2"
        },
        {
            "username": "goat",
            "post_id": 2,
            "title": "Job Opportunities!",
            "content": "Come get a job as a banker.",
            "status": "verified",
            "category": "living",
            "date_time": "2020-01-01 19:58:00 GMT+2"
        },
        {
            "username": "bear",
            "post_id": 3,
            "title": "New Gathering",
            "content": "Gathering at Murray Ave!",
            "status": "false",
            "category": "social",
            "date_time": "2020-01-01 22:00:00 GMT+2"
        }
    ]
}
"""
def get_posts(request):

	if request.method == 'GET':

		if Refugee_Profile.objects.filter(user=request.user).exists():
				region = Refugee_Profile.objects.get(user=request.user).region


		elif NGO_Profile.objects.filter(user=request.user).exists():
				region = NGO_Profile.objects.get(user=request.user).region


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

			user_object = post.user
			if Refugee_Profile.objects.filter(user=post.user).exists():
				user_profile = Refugee_Profile.objects.get(user=user_object)


			elif NGO_Profile.objects.filter(user=post.user).exists():
				user_profile = NGO_Profile.objects.get(user=user_object)

			posts.append({'post_id': post.id, 'user': {'username': user_object.username, 'bio': user_profile.bio, 'avatar': user_profile.avatar}, 'title': post.title, 'content': post.content, 'category': post.category, 'status': post.status, 'date_time': post.date_time*1000})

		status = 200
		# Build json response
		response = json.dumps({'status': 'ok', 'res': posts})
		
		return HttpResponse(response, content_type='application/json', status=status)

