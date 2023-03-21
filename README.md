# ShortURL

A URL Shortner mini project which creates a short url for any [rebuy.de](rebuy.de) related URL and opening the short url redirects to the orignal URL.

![png](https://i.imgur.com/lZyURZf.png)

## Main Requirements

- The shortened URL hash has to be four chars long.
- Requesting the shortened URL will redirect the client to the target url.
- Entry is limited to reBuy product URLs only.

## Tech Stack

### Frontend:

- JavaScript
- [React.js](https://react.dev/)
- [AntDesign](https://ant.design)

### Backend:

- PHP 8.2
- [Laravel](https://laravel.com/)
- [MongoDB](https://www.mongodb.com/)

## Prerequisites

- docker
- docker-compose

## Installation

### Setting up the .env file

- clone the git repository

```bash
git clone git@github.com:fahadbinashraf/shorturl.git
```

- cd into the backend folder

```bash
cd shorturl/backend
```

- copy the .env.example

```bash
cp .env.example .env
```

### Docker

```bash
docker-comopse up --build
```

Generate App Key

```bash
docker exec -it shorturl_backend php artisan key:generate
```

Run database migrations on the backend docker container

```bash
docker exec -it shorturl_backend php artisan migrate
```

## Usage

Open [localhost:3000](http://localhost:3000) in your web browser.

## Screenshots

![png](https://i.imgur.com/XJJr270.png)

URL Validation

![png](https://i.imgur.com/ilE4ZEg.png)

URL limited to only Rebuy products

![png](https://i.imgur.com/B8lCzys.png)

## License

[MIT](https://choosealicense.com/licenses/mit/)
