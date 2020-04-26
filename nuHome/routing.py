from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import os
import nuHome.urls

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'nuHome.settings')

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': AuthMiddlewareStack(
        URLRouter(
            nuHome.urls.websocket_urlpatterns
        )
    ),
})