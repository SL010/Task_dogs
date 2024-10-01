# Используем официальный образ Node.js для сборки приложения
FROM node:16-alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения в рабочую директорию
COPY . .

# Собираем приложение для продакшена
RUN npm run build --prod

CMD cp -r build result_build