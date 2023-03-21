FROM php:8.2

RUN apt-get update -y && apt-get install -y openssl zip unzip git
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
# RUN chmod +x /usr/local/bin/docker-install-php-extensions && sync && \
#     docker-install-php-extensions mbstring zip

# For mongodb
RUN apt-get install -y libcurl4-openssl-dev pkg-config libssl-dev
RUN pecl install mongodb
RUN echo "extension=mongodb.so" > /usr/local/etc/php/conf.d/docker-php-ext-mongodb.ini

WORKDIR /app/backend

COPY . .

RUN composer install

# RUN php artisan migrate

EXPOSE 8000

CMD php artisan serve --host=0.0.0.0
