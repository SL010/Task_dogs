from django.urls import path, include
from rest_framework import routers

from .views import DogsViewSet, MessageViewSet, UserViewSet

app_name = 'api'

router = routers.DefaultRouter()
router.register('users', UserViewSet, basename='users')
router.register(r'dogs', DogsViewSet, basename='dogs')
router.register(r'message', MessageViewSet, basename='message')
print(router)

urlpatterns = [
    path('', include(router.urls)),
]
