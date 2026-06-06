# Настройка Prettier и Stylelint в Angular проекте

## Шаг 1: Установка Prettier

```bash
npm install --save-dev prettier
```

## Шаг 2: Создание конфига Prettier

Создай файл `.prettierrc.json` в корне проекта:

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "none",
  "bracketSameLine": false,
  "printWidth": 100,
  "endOfLine": "auto",
  "htmlWhitespaceSensitivity": "ignore",
  "vueIndentScriptAndStyle": false,
  "embeddedLanguageFormatting": "auto",
  "overrides": [
    {
      "files": "*.component.html",
      "options": {
        "parser": "angular",
        "printWidth": 120,
        "singleQuote": false
      }
    },
    {
      "files": "*.scss",
      "options": {
        "parser": "scss",
        "singleQuote": false,
        "printWidth": 80
      }
    },
    {
      "files": "*.ts",
      "options": {
        "parser": "typescript",
        "printWidth": 100
      }
    }
  ]
}
```

## Шаг 3: Создание .prettierignore

```text
dist/
node_modules/
.angular/
coverage/
```

## Шаг 4: Установка Stylelint

```bash
npm install --save-dev stylelint stylelint-config-standard-scss stylelint-order
```

## Шаг 5: Создание .stylelintrc.json

```json
{
  "extends": ["stylelint-config-standard-scss"],
  "plugins": ["stylelint-order"],
  "rules": {
    "order/order": ["custom-properties", "dollar-variables", "declarations", "at-rules", "rules"],
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "flex",
      "grid",
      "gap",
      "width",
      "max-width",
      "min-width",
      "height",
      "max-height",
      "min-height",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "border",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-radius",
      "background",
      "color",
      "font-family",
      "font-size",
      "font-weight",
      "line-height",
      "text-align",
      "text-decoration",
      "text-transform",
      "opacity",
      "visibility",
      "transition",
      "transform",
      "animation"
    ],
    "max-nesting-depth": 3,
    "selector-max-id": 0,
    "declaration-no-important": true,
    "scss/dollar-variable-pattern": "^[a-z][a-zA-Z0-9-]*$",
    "scss/at-extend-no-missing-placeholder": true,
    "scss/no-duplicate-dollar-variables": true,
    "no-duplicate-selectors": true
  }
}
```

## Шаг 6: Создание .stylelintignore

```text
dist/
node_modules/
.angular/
coverage/
```

## Шаг 7: Добавление скриптов в package.json

```json
{
  "prettier:check": "prettier --check \"src/**/*.{ts,html,scss,json,md}\"",
  "prettier:fix": "prettier --write \"src/**/*.{ts,html,scss,json,md}\"",
  "stylelint:check": "stylelint \"src/**/*.scss\"",
  "stylelint:fix": "stylelint \"src/**/*.scss\" --fix",
  "lint:all": "npm run prettier:check && npm run stylelint:check",
  "lint:fix": "npm run prettier:fix && npm run stylelint:fix"
}
```

## Шаг 8: Создание .vscode/settings.json

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "editor.formatOnType": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit"
  },
  "prettier.useEditorConfig": false,
  "prettier.useTabs": false,
  "prettier.configPath": ".prettierrc.json",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.associations": {
    "*.component.html": "html",
    "*.component.scss": "scss"
  },
  "emmet.includeLanguages": {
    "typescript": "html",
    "scss": "css"
  },
  "stylelint.validate": ["scss", "css"],
  "css.validate": false,
  "scss.validate": false
}
```

## Шаг 9: Установка расширений VS Code (вручную)

В VS Code установить:

- **Prettier - Code formatter** (`esbenp.prettier-vscode`)
- **Stylelint** (`stylelint.vscode-stylelint`)

## Шаг 10: Проверка работы

```bash
# Проверить форматирование
npm run prettier:check

# Исправить форматирование
npm run prettier:fix

# Проверить SCSS
npm run stylelint:check

# Исправить SCSS
npm run stylelint:fix

# Проверить всё вместе
npm run lint:all

# Исправить всё вместе
npm run lint:fix
```

Готово! Настройка завершена. Теперь при сохранении файлов Prettier форматирует код, а Stylelint проверяет SCSS.