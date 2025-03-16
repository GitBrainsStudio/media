# Базовый docker-compose.yml для фуллстэк проекта с разбиением

docker-compose.yml для бэка

```
services:
  backend:
    container_name: avm-back
    image: ghcr.io/gitbrainsstudio/avm-back:development
    command: uvicorn Main:FastApi --host 0.0.0.0 --port 8080
    ports:
      - "8080:8080"
    restart: always
    networks:
      - nginx_network

networks:
  nginx_network:
    external: true
```

docker-compose.yml для фронта

```
services:
  frontend:
    container_name: avm-front
    image: ghcr.io/gitbrainsstudio/avm-front:development
    ports:
      - "4000:4000"
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
        # hack to prevent nginx to resolve container's host on start up
        set $docker_host "avm-front";
        proxy_pass http://$docker_host:4000;
    }

    location /api {
        # hack to prevent nginx to resolve container's host on start up
        set $docker_host "avm-back";
        proxy_pass http://$docker_host:8080;
    }
}
```
