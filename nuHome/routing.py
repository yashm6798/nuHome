from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import os
import nuHome_app.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'nuHome.settings')

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': AuthMiddlewareStack(
        URLRouter(
            nuHome_app.routing.websocket_urlpatterns
        )
    ),
})