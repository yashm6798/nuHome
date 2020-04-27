# nuHome
EPS project

API doc accessible in nuHome/apidoc/doc/index.html

Install django ( pip install django )  
Install json library ( pip install json )  
Go to directory  
python3 manage.py makemigrations nuHome_app  
python3 manage.py migrate  
python3 manage.py runserver  

To add admin:
- Change admin registration handler to @csrf_exempt
- Run following cURL on AWS: `curl --header "Content-Type: application/json" --request POST --data '{"username":"admin","password":"admin","region":"China"}' http://127.0.0.1:8000/ngo_admin_registration/`
