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
@api {post} /new_message/ Create a Message
@apiName PostMessage
@apiGroup Chat

@apiParam {String} username Username of user from whom the message is sent.
@apiParam {String} to_user Username of user to whom the message is sent.
@apiParam {String} content Message's content.

@apiSuccess {String} status Successful Create a Message.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok"
    "res": {
        "from_user": "testrefugee3",
        "to_user": "testngo4"
    }
}
"""
def new_message(request):

    # This function does not require a GET method

    if request.method == 'POST':

        # Load json from request into a dictionary
        params = json.loads(request.body)
        # Get user object of sender
        from_user = User.objects.get(username=params['username'])
        # Get user object of receiver
        to_user = User.objects.get(username=params['to_user'])
        # Create a new Message object
        new_message = Message(from_user=request.user, to_user=to_user, \
            content=params['content'], \
            date_time=int(time.time()))
        # Save to the db
        new_message.save()
        # Build json response 
        response = json.dumps({'status': 'ok', 'res': {'from_user': from_user.username, \
            'to_user': to_user.username}})
        status = 200
        return HttpResponse(response, content_type='application/json', status=status)





"""
@api {get} /get_messages/ Select messages
@apiName GetMessages
@apiGroup Chat

@apiParam {String} username Username of user to retrieve the messages.

@apiSuccess {String} status Successful Select messages to the user or from the user, ordered by time.
@apiSuccess {JSON} res Return contents.
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "status": "ok",
    "res": [
        {
            "content": "hellooooo",
            "date_time": 1587868626000,
            "from_user": "testrefugee3",
            "to_user": "testngo4"
        },
        {
            "content": "hellooooo",
            "date_time": 1587868779000,
            "from_user": "testrefugee3",
            "to_user": "testngo4"
        },
        {
            "content": "hellooooo3",
            "date_time": 1587868956000,
            "from_user": "testrefugee3",
            "to_user": "testngo4"
        }
    ]
}
"""
def get_messages(request):

    if request.method == 'GET':
        # Load json from request into a dictionary
        params = json.loads(request.body)
        # Get user object of requester
        user = User.objects.get(username=params['username'])
        # Get last 10 messages of this user
        last_10_messages = Message.last_10_messages(user)
        # Create a list for messages
        message_list = []

        for message in last_10_messages:
            # Formalize the message time into 13-digit timestamp, required by frontend
            message_time = int(1000*time.mktime(message.date_time.timetuple()))
            # Append each message as a json object to the list
            message_list.append({
                'content': message.content,
                'date_time': message_time,
                'from_user': message.from_user.username,
                'to_user': message.to_user.username,
            })

        status = 200
        # Build json response
        response = json.dumps({'status': 'ok', 'res': message_list})
        return HttpResponse(response, content_type='application/json', status=status)

