from nuHome_app.models import Comment, Post
from django.http import HttpResponse
import json
import time
from django.contrib.auth.models import *
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers

# STATUS CODE 200 = OKAY
# STATUS CODE 400 = ERROR


"""
@api {post} /new_comment/ Create a Comment
@apiName PostComments
@apiGroup Comments

@apiParam {Number} post_id Post's <code>id</code>.
@apiParam {String} content Comment's content.

@apiSuccess {String} status Successful Post a Comment.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "comment_id": 10,
        "post_id": 5
    }
}
"""
def create_comment(request):

	# This function does not require a GET method

	if request.method == 'POST':

		# Load json from request into a dictionary
		params = json.loads(request.body)
		# Create a new Comment object
		new_comment = Comment(user=request.user, content=params['content'], post=Post.objects.get(id=params['post_id']), date_time=int(time.time()))
		# Save to the db
		new_comment.save()
		# Build json response 
		response = json.dumps({'status': 'ok', 'res': {'comment_id': new_comment.id, 'post_id': new_comment.post.id}})
		status = 200
		return HttpResponse(response, content_type='application/json', status=status)




"""
@api {delete} /delete_comment/ Delete a Comment
@apiName DeleteComment
@apiGroup Comments

@apiParam {Number} comment_id Comment's <code>id</code>.

@apiSuccess {String} status Successful Delete a Comment.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "comment_id": 3
    }
}

@apiError (Error 400) {String} NoCommentFound No comment found.
"""
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




"""
@api {get} /get_comments/ Select all Comments of a Post
@apiName GetComments
@apiGroup Comments

@apiParam {Number} post_id Post's <code>id</code>.

@apiSuccess {String} status Successful Select Comments of a Post.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": [
        {
            "comment_id": 1,
            "username": "sheep",
            "content": "Nice post!",
            "date_time": "2020-01-01 23:50:00 GMT+2"
        },
        {
            "comment_id": 2,
            "username": "wolverine",
            "content": "Very helpful",
            "date_time": "2020-01-01 23:55:00 GMT+2"
        },
        {
            "comment_id": 3,
            "username": "deer",
            "content": "Sounds good, but where should we meet?",
            "date_time": "2020-01-02 12:50:00 GMT+2"
        }
    ]
}
"""
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
			comments.append({'comment_id': comment.id, 'username': comment.user.username, 'content': comment.content, 'date_time': comment.date_time*1000, 'post_id': comment.post.id})

		status = 200
		# Build json response
		response = json.dumps({'status': 'ok', 'res': comments})
		return HttpResponse(response, content_type='application/json', status=status)

