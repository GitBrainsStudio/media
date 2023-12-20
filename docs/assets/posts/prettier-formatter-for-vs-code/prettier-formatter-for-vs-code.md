# Как сделать форматирование кода с помощью Prettier в Visual Studio Code

В корне проекта (рядом с файлом **angular.json**) создаём новый файл **.prettierc.json** со следующим содержимым

```
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "none",
  "bracketSameLine": true,
  "printWidth": 80
}

```

Добавляем в **settings.json** (либо создаём новый) следующие параметры

```
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.formatOnPaste": false,
    "prettier.useEditorConfig": false,
    "prettier.useTabs": false,
    "prettier.configPath": ".prettierrc.json"
  }


```

**settings.json** можно как положить в папку _.vscode_, так и попытаться найти его (если его нет) через **VS Code**:

```
View -> Command Palette -> Pref User Settings JSON
```

И незабываем поставить официальное расширение для **VS Code** по следующей ссылке (можно скачать и напрямую через **VS Code**): https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
