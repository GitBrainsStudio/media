# Базовый docker-compose.yml для фуллстэк проекта с разбиением

docker-compose.yml для бэка

```
name:
  avm
services:
  backend:
    image: ghcr.io/gitbrainsstudio/avm-back:development
    command: uvicorn Main:FastApi --host 0.0.0.0 --port 8080
    restart: always
    networks:
      - nginx_network

networks:
  nginx_network:
    external: true
```

docker-compose.yml для фронта

```
name:
  avm
services:
  frontend:
    image: ghcr.io/gitbrainsstudio/avm-front:development
    restart: always
    networks:
      - nginx_network

networks:
  nginx_network:
    external: true
```

docker-compose.yml для nginx

```
services:
  nginx:
    container_name: nginx-proxy
    image: nginx:latest
    ports:
      - "80:80"
    networks:
      - nginx_network
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:rw
networks:
  nginx_network:
    external: true
```

nginx.conf для nginx

```
server {
    listen 80;

    # Docker DNS
    resolver 127.0.0.11;

    location / {
        proxy_pass http://avm-frontend-1:4000;
    }

    location /api {
        proxy_pass http://avm-backend-1:8080;
    }
}
```
