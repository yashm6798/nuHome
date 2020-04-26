from nuHome_app.models import *
from django.http import HttpResponse
import json
import time
from django.contrib.auth.models import *
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers

# STATUS CODE 200 = OKAY
# STATUS CODE 400 = ERROR


def new_message(request):

    # This function does not require a GET method

    if request.method == 'POST':

        # Load json from request into a dictionary
        params = json.loads(request.body)
        from_user = User.objects.get(username=params['username'])
        to_user = User.objects.get(username=params['to_user'])
        # Create a new Post object

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


def get_messages(request):

    if request.method == 'GET':
        params = json.loads(request.body)
        user = User.objects.get(username=params['username'])
        last_10_messages = Message.last_10_messages(user)

        message_list = []

        for message in last_10_messages:

            message_time = int(1000*time.mktime(message.date_time.timetuple()))

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


def online_status(request):

    if request.method == 'GET':

        params = json.loads(request.body)
        user = User.objects.get(username=params['username'])
        whether_online = user.is_authenticated

        status = 200
        # Build json response
        response = json.dumps({'status': 'ok', 'res': {"online_status": whether_online}})
        
        return HttpResponse(response, content_type='application/json', status=status)

