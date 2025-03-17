# Создание юзера для деплоя ограниченными правами

Создаем нового юзера deploy и добавляем в группу docker

```
sudo useradd --create-home --user-group --shell /bin/bash --groups docker deploy

sudo usermod --lock deploy
```

Логинимся

```
sudo -i -u deploy
```

Генерируем ssh

```
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -C "deploy"
```

Разрешаем подключение к серверу

```
cat .ssh/id_ed25519.pub > .ssh/authorized_keys
```

При использовании ssh в экшенах не забываем прописать в секретах SSH_USER, SSH_HOST, SSH_PRIVATE_KEY
