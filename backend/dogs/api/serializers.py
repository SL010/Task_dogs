from rest_framework import serializers

from .models import Dogs, Message, User


class UserSerializer(serializers.ModelSerializer):
    """Сериализатор для пользователей."""

    class Meta:
        model = User
        fields = ('id', 'username', 'last_name', 'email')


class DogsSerializer(serializers.ModelSerializer):
    """Сериализатор для питомцев."""

    class Meta:
        model = Dogs
        fields = ('name', 'breed', 'age', 'description', 'owner')
        read_only_fields = ('owner',)


class MessageSerializer(serializers.ModelSerializer):
    """Сериализатор для просмотра сообщений."""

    class Meta:
        model = Message
        fields = ('sender', 'recipient', 'text')
