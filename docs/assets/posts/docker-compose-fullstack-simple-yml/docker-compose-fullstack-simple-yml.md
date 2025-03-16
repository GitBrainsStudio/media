# Базовый docker-compose.yml для фуллстэк проекта

docker-compose.yml

```
version: '3'

services:
  frontend:
    container_name: app-front
    image: app-front-image
    restart: always
  backend:
    container_name: app-back
    image: app-back-image
    command: uvicorn Main:FastApi --host 0.0.0.0 --port 8080
    ports:
      - "8080:8080"
    restart: always
  nginx:
    container_name: app-nginx
    image: nginx:latest
    expose:
      - "80"
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:rw
    restart: always
```

nginx.conf

```
server {
  listen 80;

  location / {
    proxy_pass http://app-front:4200;
  }

  location /api {
    proxy_pass http://app-back:8080;
  }
}
```
