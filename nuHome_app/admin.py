from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Refugee_Profile)
admin.site.register(NGO_Profile)
admin.site.register(NGO_Admin_Profile)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Message)