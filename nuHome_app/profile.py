from nuHome_app.models import *
from django.http import HttpResponse
import json
import time
from django.contrib.auth.models import *
from django.contrib.auth import logout
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers

# STATUS CODE 200 = OKAY
# STATUS CODE 400 = ERROR


def update_profile(request):

    # This function does not require a GET method

    if request.method == 'PUT':

        # Load json from request into a dictionary
        params = json.loads(request.body)
        username = ""
        bio = params['bio']

        # Check whether user is in refugee profile
        if Refugee_Profile.objects.filter(user=request.user).exists():
            # Load username
            username = Refugee_Profile.objects.get(user=request.user).user.username
            # Load refugee object from profile
            refugee = Refugee_Profile.objects.get(user__username=username)
            # Set bio in profile
            refugee.bio = bio
            # save the modification to database
            refugee.save()

        # Check whether user is in ngo profile
        elif NGO_Profile.objects.filter(user=request.user).exists():
            username = NGO_Profile.objects.get(user=request.user).user.username
            ngo = NGO_Profile.objects.get(user__username=username)
            ngo.bio = bio
            ngo.save()

        else:
            # Return error
            status = 400
            # Build json response
            response = json.dumps({'status': 'err', 'res': {'message': 'No valid user profile'}})

        # Build json response
        response = json.dumps({'status': 'ok', 'res': {'username': username}})
        status = 200
        return HttpResponse(response, content_type='application/json', status=status)


def delete_profile(request):

    # This function does not require a GET method

    if request.method == 'DELETE':

        username = ''

        # Check user type and load username
        if Refugee_Profile.objects.filter(user=request.user).exists():
            username = Refugee_Profile.objects.get(user=request.user).user.username
            
        elif NGO_Profile.objects.filter(user=request.user).exists():
            username = NGO_Profile.objects.get(user=request.user).user.username
            
        elif NGO_Admin_Profile.objects.filter(user=request.user).exists():
            username = NGO_Admin_Profile.objects.get(user=request.user).user.username
            
        else:
            # Return error
            status = 400
            # Build json response
            response = json.dumps({'status': 'err', 'res': {'message': 'No valid user profile'}})
        
        # Log out current user, delete user information from the whole database
        logout(request)
        auth_user = User.objects.filter(username=username)
        auth_user.delete()

        # Build json response
        response = json.dumps({'status': 'ok', 'res': {'username': username}})
        status = 200
        return HttpResponse(response, content_type='application/json', status=status)


def get_profile(request):

    if request.method == 'GET':

        status = 200

        # Check whether user is in refugee profile
        if Refugee_Profile.objects.filter(user=request.user).exists():
                # Load username
                username = Refugee_Profile.objects.get(user=request.user).user.username
                # Load region from profile
                region = Refugee_Profile.objects.get(user=request.user).region
                # Load bio from profile
                bio = Refugee_Profile.objects.get(user=request.user).bio
                # Load avatar from profile
                avatar = Refugee_Profile.objects.get(user=request.user).avatar
                # Load verification_status from profile
                verification_status = Refugee_Profile.objects.get(user=request.user).verification_status
                # Load assigned ngo from profile
                assigned_ngo = Refugee_Profile.objects.get(user=request.user).assigned_ngo.user.username
                # Form response to send back
                response = json.dumps({'status': 'ok', \
                    'res': {'username': username, \
                    'avatar': avatar, 'bio': bio, \
                    'region': region, \
                    'verification_status': verification_status, \
                    'user_type': 'refugee', \
                    'assigned_ngo': assigned_ngo}})

        # Check whether user is in ngo profile
        elif NGO_Profile.objects.filter(user=request.user).exists():
                username = NGO_Profile.objects.get(user=request.user).user.username
                region = NGO_Profile.objects.get(user=request.user).region
                bio = NGO_Profile.objects.get(user=request.user).bio
                avatar = NGO_Profile.objects.get(user=request.user).avatar
                response = json.dumps({'status': 'ok', \
                    'res': {'username': username, \
                    'avatar': avatar, 'bio': bio, \
                    'region': region, \
                    'user_type': 'ngo_user'}})

        # Check whether user is in ngo admin profile
        elif NGO_Admin_Profile.objects.filter(user=request.user).exists():
                username = NGO_Admin_Profile.objects.get(user=request.user).user.username
                response = json.dumps({'status': 'ok', \
                    'res': {'username': username, \
                    'avatar': '', 'bio': '', \
                    'region': '', \
                    'user_type': 'ngo_admin'}})

        else:
            # Return error
            status = 400
            # Build json response
            response = json.dumps({'status': 'err', 'res': {'message': 'No valid user profile'}})

        
        return HttpResponse(response, content_type='application/json', status=status)


def get_avatar(request):

    if request.method == 'GET':

        params = json.loads(request.body)
        user = User.objects.get(username=params['username'])
        avatar = None
        status = 200

        if Refugee_Profile.objects.filter(user=user).exists():
            avatar = Refugee_Profile.objects.get(user=user).avatar

        elif NGO_Profile.objects.filter(user=user).exists():
            avatar = NGO_Profile.objects.get(user=user).avatar

        else:
            # Return error
            status = 400
            # Build json response
            response = json.dumps({'status': 'err', 'res': {'avatar': 'No valid user avatar'}})

        if avatar is not None:
            
            response = json.dumps({'status': 'ok', 'res': {"avatar": avatar}})
        
        return HttpResponse(response, content_type='application/json', status=status)


