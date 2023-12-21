# Базовый докерфайл для сборки Python приложения

dockerfile

```
FROM python:3.10-slim as python-build
WORKDIR /app
RUN mkdir -p /app
COPY ./ /app
COPY requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt
```
