# Использование SSL и HTTPS

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
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:rw
      - ./certs/ssl_certificate.crt:/etc/ssl/private/ssl_certificate.crt:ro
      - ./certs/ssl_certificate.key:/etc/ssl/private/ssl_certificate.key:ro
    restart: always
```

nginx.conf

```
server {
	listen 80;

    if ($host !~* ^(domain.tld|www.domain.tld|abc.domain.tld)$ ) {
        return 301 https://domain.com$request_uri;
    }

	server_name domain.com;
	return 301 https://domain.com$request_uri;
}

server {
  listen 443 ssl;
  server_name domain.com

  ssl_certificate    /etc/ssl/private/ssl_certificate.crt;
  ssl_certificate_key /etc/ssl/private/ssl_certificate.key;

  location / {
    proxy_pass http://app-front:4200;
  }

  location /api {
    proxy_pass http://app-back:8080;
  }
}
```
