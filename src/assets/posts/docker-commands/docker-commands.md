# Полезные команды

Список контейнеров

```
docker ps -a
```

Список образов

```
docker images
```

Стопнуть все контейнеры

```
docker stop $(docker ps -a -q)
```

Удалить все контейнеры

```
docker rm $(docker ps -a -q)
```

Удалить все образы

```
docker rmi $(docker images -q)
```
