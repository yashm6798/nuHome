from django.shortcuts import render
from nuHome_app.models import *
from django.http import HttpResponse, Http404
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import *
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
# Create your views here.

# STATUS CODE 200 = OKAY
# STATUS CODE 400 = ERROR
# STATUS CODE 401 = INCORRECT CREDENTIALS

def registration(request):
	# GET request is only used to return a cookie with csrf token which needs to be returned for POST requests

	if request.method == 'GET':
		response = {}
		return HttpResponse(response, content_type='application/json', status=200)

	# For POST requests, need to check data and store in db if valid

	if request.method == 'POST':
		params = json.loads(request.body)

		# First check if a username is already taken
		if User.objects.filter(username__exact=params['username']):
			# If username is taken, return error message as json response
			response = json.dumps({'status': 'err', 'res': {'message': 'Username taken'}})
			status=400

		# Otherwise, extract data from the body of POST request and store in the db
		else:
			# First create a Django user object
			new_user = User.objects.create_user(username=params['username'], password=params['password'])
			# Save() saves the created object in the database
			new_user.save()
			# Assign an NGO user to the refugee
			assigned_ngo = NGO_Profile.objects.filter(region=params['region']).order_by('no_of_refugees_assigned')[0]
			assigned_ngo.no_of_refugees_assigned += 1
			assigned_ngo.save()
			# Create a refugee profile for the user
			new_refugee = Refugee_Profile(user=new_user, region=params['region'], assigned_ngo=assigned_ngo)
			# Save the refugee profile
			new_refugee.save()
			# Authenticate function takes a username and password and authenticates using the Django User class (Not required here since data is just stored and is correct)
			new_user = authenticate(username=params['username'], password=params['password'])
			# Login function generates a session for the user and logs the user in
			login(request, new_user)
			# Create a json response to return to the frontend with the required parameters
			response = json.dumps({'status': 'ok', 'res': {'username': new_user.username, 'region': new_refugee.region, 'bio': new_refugee.bio, 'avatar': new_refugee.avatar, 'user_type': 'refugee', 'isVerified': False}})
			status=200
		
		# Return an http response back to the frontend
		return HttpResponse(response, content_type='application/json', status=status)

def ngo_registration(request):

	# This methods does not require a get request to return a cookie since only a logged in ngo_admin will invoke this function

	# Now, check and extract data from the POST request and store in db

	if request.method == 'POST':
		params = json.loads(request.body)

		# Check if a username is already taken
		if User.objects.filter(username__exact=params['username']):
			# If username is taken, return error message as json response
			response = json.dumps({'status': 'err', 'res': {'message': 'Username taken'}})
			status=400

		# Otherwise, extract data from POST	request
		else:	
			# Create a Django user object
			new_user = User.objects.create_user(username=params['username'], password=params['password'])
			# Save in the db
			new_user.save()
			# Create an ngo user profile for the user
			new_ngo_user = NGO_Profile(user=new_user, region=params['region'], no_of_refugees_assigned=0)
			# Save the ngo user profile
			new_ngo_user.save()
			# Create json response to return to frontend
			response = json.dumps({'status': 'ok', 'res': {'username': new_user.username, 'region': new_ngo_user.region, 'bio': new_ngo_user.bio, 'avatar': new_ngo_user.avatar, 'user_type': 'ngo_worker'}})
			status=200
		
		# Return http response
		return HttpResponse(response, content_type='application/json', status=status)

def ngo_admin_registration(request):
	# Return cookie to be used for POST requests
	if request.method == 'GET':
		response = {}
		return HttpResponse(response, content_type='application/json', status=200)

	if request.method == 'POST':
		params = json.loads(request.body)

		# Check if a username is already taken
		if User.objects.filter(username__exact=params['username']):
			# If username is taken, return error message as json response
			response = json.dumps({'status': 'err', 'res': {'message': 'Username taken'}})
			status=400

		# Otherwise, extract data from POST	request
		else:	
			# Create a Django user object
			new_user = User.objects.create_user(username=params['username'], password=params['password'])
			# Save in the db
			new_user.save()
			# Create an ngo admin profile for the user
			new_ngo_admin = NGO_Admin_Profile(user=new_user, region=params['region'])
			# Save the ngo admin profile
			new_ngo_admin.save()
			# Authenticate the username and password (Not required since data is just stored and is correct)
			# new_user = authenticate(username=params['username'], password=params['password'])
			# Login the user and generate session
			# login(request, new_user)
			# Create json response to return to frontend
			response = json.dumps({'status': 'ok', 'res': {'username': new_user.username, 'region': new_ngo_admin.region, 'user_type': 'ngo_admin'}})
			status=200
		
		# Return http response
		return HttpResponse(response, content_type='application/json', status=status)

def login_action(request):
	# Return cookie to be used for POST requests

	if request.method == 'GET':
		response={}
		return HttpResponse(response, content_type='application/json', status=200)

	# Check credentials and login
	if request.method == 'POST':
		response={}
		params = json.loads(request.body)

		# Authenticate function returns a user object if authentication successful and a none object if authentication fails
		user = authenticate(username=params['username'], password=params['password'])

		# Set status to 401 if authentication fails
		if user is None:
			response = json.dumps({'status': 'err', 'res': {}})
			status=401

		# Otherwise, login user and check the type of user before returning user data
		else:

			# Log user in, generate session and set status to 200
			login(request, user)
			status = 200

			# Check if the user is a refugee by checking if user exists in any refugee profile entries
			if Refugee_Profile.objects.filter(user=user).exists():

				# Retrieve the associated refugee profile entry
				refugee = Refugee_Profile.objects.get(user=user)

				# Check verification status of refugee and create json response accordingly

				if(refugee.verification_status==False):
					response = json.dumps({'status': 'ok', 'res': {'username': user.username, 'region': refugee.region, 'bio': refugee.bio, 'avatar': refugee.avatar, 'user_type': 'refugee', 'isVerified': False}})
				else:
					response = json.dumps({'status': 'ok', 'res': {'username': user.username, 'region': refugee.region, 'bio': refugee.bio, 'avatar': refugee.avatar, 'user_type': 'refugee', 'isVerified': True}})


			# Check if the user is an ngo user by checking if user exists in any ngo profile entries and create json response accordingly
			elif NGO_Profile.objects.filter(user=user).exists():
				ngo_user = NGO_Profile.objects.get(user=user)
				response = json.dumps({'status': 'ok', 'res': {'username': user.username, 'region': ngo_user.region, 'bio': ngo_user.bio, 'avatar': ngo_user.avatar, 'user_type': 'ngo_worker'}})

			# The only remaining option is of ngo admin. Retrieve admin profile and create json response
			else:
				ngo_admin = NGO_Admin_Profile.objects.get(user=user)
				response = json.dumps({'status': 'ok', 'res': {'username': user.username, 'region': ngo_admin.region, 'user_type': 'ngo_admin'}})

		return HttpResponse(response, content_type='application/json', status=status)

def logout_action(request):

	# Logout functions expires the session of the user associated with the request
	logout(request)
	# No extra data to return in the Http response
	response = json.dumps({'status': 'ok', 'res': {}})
	return HttpResponse(response, content_type='application/json', status=200)


#Below are the placeholders for the functions yet to be implemented

'''

def update_verification_status(request):
	#Function to change the verification status of refugees

def chat_action(request):
	#Function to implement 1-to-1 chat between ngos and refugees

def post_action(request):
	#Function to implement post functionality

def comment_action(request):
	#Function to implement comment functionality

def update_post_status(request):
	#Function to update post status

def update_profile(request):
	#Function to update profile for users

def subject_access_request(request):
	#Function to implement subject access request

def delete_file(request):
	#Function to delete files uploaded by users

def encrypt_file(request):
	#Function to encrypt file

'''
