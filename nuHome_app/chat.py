from django.http import HttpResponse
import json

def room(request):
    
    response = json.dumps({'status': 'ok', 'res': {}})
    status = 200
    return HttpResponse(response, content_type='application/json', status=status)
