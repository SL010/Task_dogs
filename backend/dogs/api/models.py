from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Dogs(models.Model):
    """Модель для создания описания собаки."""

    name = models.CharField(max_length=64)
    breed = models.CharField(max_length=64)
    age = models.IntegerField()
    owner = models.ForeignKey(
        User,
        related_name='dogs',
        on_delete=models.CASCADE
    )
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Message(models.Model):
    """Модель для создания и хранения сообщений."""

    sender = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='sender'
    )
    recipient = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='recipient'
    )
    text = models.TextField()
    # created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (
            f'Message from {self.sender} to '
            f'{self.recipient} at {self.created_at}'
        )
