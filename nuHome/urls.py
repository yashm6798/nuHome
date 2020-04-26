"""nuHome URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from nuHome_app import authentication, posts, comments, profile, sar, new_chat
from nuHome_app.consumer import ChatConsumer

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', authentication.login_action, name='login'),
    path('registration/', authentication.registration, name='refugee_registration'),
    path('ngo_registration/', authentication.ngo_registration, name='ngo_registration'),
    
    path('ngo_admin_registration/', authentication.ngo_admin_registration, name='ngo_admin_registration'),
    re_path(r'^get_unverified_users/$', authentication.get_unverified_users, name='get_unverified_users'),
    path('verify_user/', authentication.verify_user, name='verify_user'),
    path('upload_document/', authentication.file_upload, name='file_upload'),
    path('logout/', authentication.logout_action, name='logout'),

    path('new_post/', posts.create_post, name='create_post'),
    path('update_post_status/', posts.update_post_status, name='update_post_status'),
    path('delete_post/', posts.delete_post, name='delete_post'),
    path('get_all_posts/', posts.get_posts, name='get_posts'),

    path('new_comment/', comments.create_comment, name='create_comment'),
    path('delete_comment/', comments.delete_comment, name='delete_comment'),
    re_path(r'^get_comments/$', comments.get_comments, name='get_comments'),

    path('get_user_profile/', profile.get_profile, name='get_user_profile'),
    path('update_user_profile/', profile.update_profile, name='update_user_profile'),
    path('delete_user_profile/', profile.delete_profile, name='delete_user_profile'),
    path('get_sar/', sar.get_sar, name='get_sar'),

    path('get_messages/', new_chat.get_messages, name='get_messages'),
    path('new_message/', new_chat.new_message, name='new_message'),

    path('online_status/', new_chat.online_status, name='online_status'),
]

websocket_urlpatterns = [
    re_path(r'ws/chat/$', ChatConsumer),
]