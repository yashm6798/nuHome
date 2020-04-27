from nuHome_app.models import *
from django.http import HttpResponse
import json
import time
from django.contrib.auth.models import *
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers

# STATUS CODE 200 = OKAY
# STATUS CODE 400 = ERROR

@csrf_exempt
def new_message(request):

    # This function does not require a GET method

    if request.method == 'POST':

        # Load json from request into a dictionary
        params = json.loads(request.body)
        # Get user object of sender
        from_user = User.objects.get(username=params['from_user'])
        # Get user object of receiver
        to_user = User.objects.get(username=params['to_user'])
        # Create a new Message object
        new_message = Message(from_user=from_user, to_user=to_user, \
            content=params['content'], \
            date_time=int(time.time()))
        # Save to the db
        new_message.save()
        # Build json response 
        response = json.dumps({'status': 'ok', 'res': {'from_user': from_user.username, 'to_user': to_user.username}})
        status = 200
        return HttpResponse(response, content_type='application/json', status=status)

@csrf_exempt
def get_messages(request):

    if request.method == 'GET':
        # Get user object of requester
        user = User.objects.get(username=request.GET['username'])
        # Get last 10 messages of this user
        last_10_messages = Message.last_10_messages(user)
        # Create a list for messages
        message_list = []

        for message in last_10_messages:
            # Formalize the message time into 13-digit timestamp, required by frontend
            message_time = message.date_time
            # Append each message as a json object to the list
            message_list.append({
                'content': message.content,
                'date_time': message_time * 1000,
                'from_user': message.from_user.username,
                'to_user': message.to_user.username,
            })

        status = 200
        # Build json response
        response = json.dumps({'status': 'ok', 'res': message_list})
        return HttpResponse(response, content_type='application/json', status=status)

'''
This method is deprecated. Online status is not needed.
'''
def online_status(request):

    if request.method == 'GET':

        params = json.loads(request.body)
        user = User.objects.get(username=params['username'])
        whether_online = user.is_authenticated

        status = 200
        # Build json response
        response = json.dumps({'status': 'ok', 'res': {"online_status": whether_online}})
        
        return HttpResponse(response, content_type='application/json', status=status)

