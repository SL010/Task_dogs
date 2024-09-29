from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status, mixins
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Dogs, Message, User
from .serializers import DogsSerializer, MessageSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """ViewSet пользователей для создание/изменения/получения."""

    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(
        detail=True,
        methods='post',
        permission_classes=(IsAuthenticated,)
    )
    def send_message(self, request, id=None):
        """Метод отправки сообщения пользователю."""
        recipient = get_object_or_404(User, pk=id)
        data = {
            'sender': request.user.id,
            'recipient': recipient.id,
            'text': request.data.get('text')
        }
        serializer = MessageSerializer(
            data=data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data,
                        status=status.HTTP_201_CREATED)


class DogsViewSet(viewsets.ModelViewSet):
    """ViewSet для питомцев создание/получение/изменения."""

    queryset = Dogs.objects.all()
    serializer_class = DogsSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class MessageViewSet(mixins.RetrieveModelMixin,
                     mixins.ListModelMixin,
                     viewsets.GenericViewSet):
    """ViewSet для просмотра сообщений."""

    serializer_class = MessageSerializer

    def get_queryset(self):
        return Message.objects.filter(recipient=self.request.user)
