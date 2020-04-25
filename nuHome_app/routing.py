from django.urls import re_path

from nuHome_app.consumer import ChatConsumer

websocket_urlpatterns = [
    re_path(r'ws/chat/$', ChatConsumer),
]