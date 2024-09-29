from django.contrib import admin
from django.urls import path, include

from .views import chat_room

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('chat/<str:room_name>/', chat_room, name='chat_room'),
    path('api/', include('djoser.urls')),
    path('api/', include('djoser.urls.authtoken')),
]
