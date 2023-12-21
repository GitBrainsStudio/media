# Базовый докерфайл для сборки Angular приложения

dockerfile

```
FROM node:latest as angular-build
WORKDIR /app
RUN mkdir -p /app
COPY ./ /app
RUN npm install
RUN npm run build --prod
RUN npm run compress

FROM nginx:latest as nginx-build
COPY --from=angular-build /app/dist/am /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

.dockerignore

```
/node_modules/
```

nginx.conf

```
server {
  listen 4200;

  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
    try_files $uri $uri/ /index.html =404;
  }
}
```
