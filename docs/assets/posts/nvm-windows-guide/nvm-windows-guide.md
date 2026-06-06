# Установка nvm-windows

Скачать и установить: [nvm-windows Releases](https://github.com/coreybutler/nvm-windows/releases)

```bash
nvm version
```

## Установка Node

```bash
nvm install 16.14.2    # для Angular 13
nvm install 22         # последняя
nvm list               # * — активная версия
nvm use 16.14.2        # переключиться
node -v
npm -v
```

## Типичный сценарий

```bash
nvm use 16.14.2
cd C:\project-old
rmdir /s /q node_modules
del package-lock.json
npm install
npm start
```

Для Angular 22:

```bash
nvm use 22
cd C:\project-new
npm install
ng serve
```

## Если версия не меняется

Закрыть все терминалы и открыть новый `cmd`/`PowerShell`:
```bash
node -v
```

## Полезно запомнить

| Команда | Что делает |
|---------|-----------|
| `nvm list` | список установленных версий |
| `nvm install 16` | установить Node 16 |
| `nvm use 16` | переключиться на 16 |
| `node -v` | проверить Node |
| `npm -v` | проверить npm |

Angular 13 → Node 16, Angular 22 → Node 22. Самая беспроблемная комбинация.
