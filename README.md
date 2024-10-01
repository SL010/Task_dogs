### Приложение DOGS

### Описание проекта
```
Проект служит для отработки навыков работы с библиотекой django channels
созданием чата через WebSocket настройка asgi запуск через daphne и unicorn.
Создан бэкенда для сайта позволяющий не только размещать информацию о питомцах, но и
общаться пользователям как через личные сообщения так и через общий чат.
Для хранения данных в аркестре контейнеров задейстовована БД Postgresql и VOLUMES.
Созданы файлы для сбора контейнеров Docker и аркестра docker-compose.
Настройка Nginx в контейнере как прокси-сервера для раздачи файлов статики и 
перенаправления запросов.
```

В планах напольнить фронтенд для реализации полноценного сайта (в настоящее время создан фронтенд на Angular, настроена связь между бэкендом и фронтендем, но не настроен на отображение функционала), развернуть проект на удаленном серве в аркестре контейнеров.
```
```
На данный момент в проекте присутствуют следующие эндпоинты:

-/api/token/login      # регистрация пользователя (авторизация через Token)
-/api/token/logout     # выход из учетной записи
-/api/users/me         # информация о своей странице
-/api/users/reset_password   # страница смены пароля
-/api/users/<int:id>   # информация о юзерах
-/api/users/send_message   # отправить сообщение пользователю
-/api/message/<int:id>     # открыть страницу сообщений для просмотра полученных сообщений
-/api/dogs/<int:id>        # страница просмотра, создания, изменения удаления информации о петомце
-/chat/<str:room_name>     # страница общего чата
```
```
### Технологии, использованные при разработке:
```
Python, Django REST Framework, django channels, channels-redis,
djoser, daphne, WebSocket, gunicorn, Docker, unicorn, daphne, Postgresql
```

### Развертываение и запуск backend в контейнере (Docker):
```
-Перейди в директорию с файлом dockerfile и выполни команду:
$docker built -t dogs_backend .
```
```
-Разверните контейнер по собранному образу:
$docker run --name dogs-container dogs_backend
```

### Развертывание контейнеров бэкенда, фронтенда и подключение БД PostqgreSQL в аркестре локально
```
-Создайте файл .env в корне проекта
Пример наполнения файла:
    SECRET_KEY = 'django-insecure-....'
    ALLOWED_HOSTS='127.0.0.1, localhost, ...'
    DEBUG=True

    POSTGRES_DB=dog
    POSTGRES_USER=dog_user
    POSTGRES_PASSWORD=dog_password
    DB_NAME=dog

-переменные для Django-проекта:
DB_HOST=db
DB_PORT=5432
```

```
-Перейди в директорию с файлом docker-compose.yml и выполни команду:
$docker compose up
```

-Выполни миграции:
$docker compose exec backend python manage.py migrate
```

-Выполнить сбор статики бэкенда:
$docker compose exec backend python manage.py collectstatic --no-input
```

-Копирование статики в папку подключенную к volumn:
$docker compose exec backend cp -r /app/collected_static/. /backend_static/static/
```


# Автор: [Борисов Вячеслав]
# (https://github.com/SL010)
# Почта: borisov.slava@yandex.ru
