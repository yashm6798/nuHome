import json
from channels.generic.websocket import WebsocketConsumer
from django.contrib.auth.models import *
from channels.layers import get_channel_layer

class ChatConsumer(WebsocketConsumer):

    def on_open(self, data):
        username = data['username']
        user = self.get_user(username)
        messages = Message.last_10_messages(user)
        for message in messages:
            self.retrieve_message(message)

    def on_message(self, data):
        new_message = self.save_new_message(data)
        to_user = self.get_user(data['to_user'])
        if Connection.objects.filter(user=to_user).exists():
            to_user_connection = Connection.objects.get(user=to_user)
        self.send_to_channel(new_message, to_user_connection)

    # unknwon connection
    def connect(self):
        Connection.objects.create(channel_name=self.channel_name)

    def disconnect(self, close_code):
        Connection.objects.filter(channel_name=self.channel_name).delete()

    # helper functions below
    def retrieve_message(message):
        self.send(text_data=json.dumps({
            'type': 'message',
            'content': message.content,
            'timestamp': message.date_time
        }))

    def save_new_message(self, data):
        from_user = self.get_user(data['from_user'])
        to_user = self.get_user(data['to_user'])
        content = data['content']
        new_message = Message(from_user=from_user, to_user=to_user, content=content, \
            date_time=int(time.time()))
        new_message.save()
        return new_message

    def get_user(username):
        if Refugee_Profile.objects.filter(username=username).exists():
            return Refugee_Profile.objects.get(username=username)

        elif NGO_Profile.objects.filter(user=username).exists():
            return NGO_Profile.objects.get(user=username)
        return None

    def send_to_channel(message, to_user_connection):
        channel_layer = get_channel_layer()
        yield from channel_layer.send(to_user_connection, {
            'type': 'message',
            'content': message.content,
            'timestamp': message.date_time
        })

