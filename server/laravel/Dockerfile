FROM bitnami/laravel:9
WORKDIR /app

COPY . .

RUN composer install 

EXPOSE 3000
CMD [ "php", "artisan", "serve", "--host=0.0.0.0", "--port=3000" ]