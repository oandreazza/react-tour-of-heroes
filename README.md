![Docker Automated build](https://img.shields.io/docker/automated/jrottenberg/ffmpeg.svg?maxAge=2592000)
# React with Lumen API and Mysql Db orchestrated by Docker


## How to run

### 1. Docker do the magic
```sh
$ docker-compose up -d
```
### 2. After all containers up
```sh
$ docker-compose exec api php artisan migrate
```

### 3. Open your browser
```
http://localhost:3000/
```
### 4. Enjoy :thumbsup:

##### Reference:
 - [React](https://facebook.github.io/react/) - React Lib
 - [Lumen Laravel](https://lumen.laravel.com/docs/5.3) - PHP micro-framework
 - [Docker](https://docs.docker.com/) - Containerization platform
