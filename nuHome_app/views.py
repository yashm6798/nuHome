from django.shortcuts import render
from nuHome_app.models import *
from django.http import HttpResponse, Http404
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import *
from django.contrib.auth import authenticate, login, logout
# Create your views here.

@csrf_exempt
def registration(request):

	if request.method == 'POST':
		if User.objects.filter(username__exact=request.POST['username']):
			response = json.dumps({'res': {'message': 'Username taken'}})
			status=400
		else:	
			new_user = User.objects.create_user(username=request.POST['username'], password=request.POST['password'])
			new_user.save()
			new_refugee = Refugee_Profile(user=new_user, region=request.POST['region'])
			new_refugee.save()
			new_user = authenticate(username=request.POST['username'], password=request.POST['password'])
			login(request, new_user)
			response = {}
			status=302
		
		return HttpResponse(response, status=302)

@csrf_exempt
def user_login(request):
	if request.method == 'POST':
		response={}
		user = authenticate(username=request.POST['username'], password=request.POST['password'])
		if user is None:
			status=401
		else:
			login(request, user)
			refugee = Refugee_Profile.objects.get(user=user)
			if(refugee.verification_status==False):
				status=302
			else:
				status=200

	return HttpResponse(response, status=status)

def ngo_login(request):
	if request.method == 'POST':
		response = {}
		user = authenticate(username=request.POST['username'], password=request.POST['password'])
		if user is None:
			status=401
		else:
			login(request, user)
			status=200

	return HttpResponse(response, content_type='application/json')

def logout(request):
	logout(request)
	response = json.dumps({'status': HttpResponse(status=200)})
	return HttpResponse(response, content_type='application/json')
