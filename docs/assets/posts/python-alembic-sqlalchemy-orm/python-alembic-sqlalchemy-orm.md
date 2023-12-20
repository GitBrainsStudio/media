# Настраиваем Alembic для работы совместно с SQLAlchemy ORM

1. Первоначальная установка Alembic

```
pip install alembic
```

2. На втором шаге важно провалиться в нужную нам директорию для инициализации **Alembic**.
Так как я в основном использую [Onion](https://medium.com/expedia-group-tech/onion-architecture-deed8a554423#:~:text=Onion%20architecture%20is%20built%20on,core%20part%20of%20the%20architecture.) архитектуру, я обычно кладу **Alembic** и всего его причастные файлы в папку **Infrastracture/Alembic**.  
После перехода в необходимую для нас директорию, выполняем инициализацию **Alembic**

```
alembic init alembic
```

3. На третьем шаге необходимо прописать наш кастомный путь до файла конфигурации и прокинуть наш **engine** класс.  
Для этого переходим в папку **Alembic**, находим файл **env.py**, докручиваем файл до комментария **'# add your model's MetaData object here'** и прописываем следующие строки

```
import os
import sys

sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname( __file__ )))))

from Domain.Entities.Base import Base
target_metadata = Base.metadata

from Startup.Services.DependenciesService import DependenciesService

print(os.getcwd())
os.chdir(os.pardir)
os.chdir(os.pardir)
print(os.getcwd())
dependenciesService = DependenciesService()
sessionService = dependenciesService.SessionService

os.chdir(os.path.dirname(os.path.dirname( __file__ )))
```

4. Находясь в том же файле **env.py**, скроллимся до метода **run_migrations_online()** и редактируем параметр **connectable**

```
connectable = sessionService._engine = sessionService._engine
```
5. После этих несложных манипуляций **Alembic** готов к работе.  
Любая команда для работы с **Alembic** выполняется из директории, где находится файл **alembic.ini**.  
В моём случае это путь **Infrastracture/Alembic**

6. Создание миграции 

```
alembic revision --autogenerate
```

7. Накат миграции

```
alembic upgrade head
```