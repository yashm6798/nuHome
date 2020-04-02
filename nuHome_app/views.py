from django.shortcuts import render
from models import *
from django.http import HttpResponse, Http404
import json
# Create your views here.

def registration(request):
	if request.method == 'POST':
		if User.objects.filter(username__exact=username):
			response = json.dumps({'status': HttpResponse(status=400), 'res': {'message': 'Username taken'}})
		else:	
			new_user = User(username=request.POST['username'], password=request.POST['password'])
			new_user.save()
			new_refugee = Refugee_Profile(user=new_user, region=request.POST['region'])
			new_refugee.save()
			new_user = authenticate(username=new_user.username, password=new_user.password)
			login(request, new_user)
			response = json.dumps({'status': HttpResponse(status=302)})

		return HttpResponse(response, content_type='application/json')

def user_login(request):
	if request.method == 'POST':
		user = authenticate(username=request.POST['username'], password=request.POST['password'])
		if user is None:
			response = json.dumps({'status': HttpResponse(status=401)})
		else:
			login(request, user)
			refugee = Refugee_Profile.objects.get(user=user)
			if(refugee.verification_status==False):
				response = json.dumps({'status': HttpResponse(status=302)})
			else:
				response = json.dumps({'status': HttpResponse(status=200)})

	return HttpResponse(response, content_type='application/json')

def ngo_login(request):
	if request.method == 'POST':
		user = authenticate(username=request.POST['username'], password=request.POST['password'])
		if user is None:
			response = json.dumps({'status': HttpResponse(status=401)})
		else:
			login(request, user)
			response = json.dumps({'status': HttpResponse(status=200)})

	return HttpResponse(response, content_type='application/json')

def logout(request):
	logout(request)
	response = json.dumps({'status': HttpResponse(status=200)})
	return HttpResponse(response, content_type='application/json')
