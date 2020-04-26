'''
This file is for websocket implementation of django channel chat server.
We've deprecated this implementation and moved to new_chat.py as http requests.
'''
import json
from channels.generic.websocket import WebsocketConsumer
from django.contrib.auth.models import User
from nuHome_app.models import *
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from channels.auth import login, logout
import time

class ChatConsumer(WebsocketConsumer):

    def on_open(self, data):
        print('on open')
        username = data['username']
        user = self.get_user(username)
        messages = Message.last_10_messages(user)
        for message in messages:
            self.retrieve_history_message(message)

    def on_message(self, data):
        print('on message')
        new_message = self.save_new_message(data)
        self.send_to_channel(new_message)

    commands = {
        'on_open': on_open,
        'on_message': on_message
    }

    def connect(self):
        self.room_group_name = 'chat_%s' % self.scope["user"].username
        print('connect to room group name ' + self.room_group_name)
        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        data = json.loads(text_data)
        command_name = data['command']
        command = self.commands[command_name]
        command(self, data)


    # helper functions below

    def save_new_message(self, data):
        print('save new')
        from_user = self.get_user(data['from_user'])
        to_user = self.get_user(data['to_user'])
        content = data['content']
        new_message = Message(from_user=from_user, to_user=to_user, content=content, \
            date_time=int(time.time()))
        new_message.save()
        return new_message

    def send_to_channel(self, message):
        print('send to')
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'retrieve_chat_message',
                'message_str': self.get_message_str(message)
            }
        )


    # helper of helper functions

    def retrieve_history_message(self, message):
        print('retrieve_history_message')
        self.send(text_data=self.get_message_str(message))

    def retrieve_chat_message(self, event):
        print('retrieve_chat_message')
        self.send(text_data=event['message_str'])

    def get_user(self, username):
        return User.objects.get(username=username)

    def get_message_str(self, message):
        return json.dumps({
            'content': message.content,
            'date_time': str(message.date_time),
            'from_user': message.from_user.username,
            'to_user': message.to_user.username,
        })



