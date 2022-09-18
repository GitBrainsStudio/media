# Конфигурация ESlint & Prettier
**ESlint** — это статический анализатор для языка программирования. Он сообщает о потенциально опасных выражениях в коде, которые могут привести к аварийному завершению программы. Также линтер может сообщить об устаревших участках кода, синтаксических ошибках и неиспользованных переменных. Всего существует около 300 правил, которые можно включить/выключить по желанию.

Для чего тогда нам нужен **Prettier**?
На большом проекте, как правило, работает несколько программистов. У каждого из них может быть свое мнение относительно качества кода и размера отступов в строке. Eslint может форматировать текст, но требует дополнительной кропотливой настройки. Облегчить задачу призвана утилита Prettier. У нее открытый исходный код и имеется хорошая поддержка сообщества. Большая часть правил оформления уже задана по умолчанию, но у пакета есть гибкая система настройки и удобный API, позволяющий описывать свои правила в конфигурационном файле формата .json/.yml. Это значит, что мы можем написать файл с едиными настройками для всей команды.

Начало установки:
```
ng add @angular-eslint/schematics
npm install prettier --save-dev
npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev
```

Содержимое файла **.prettierrc.json**:
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

Содержимое файла **.eslintrc.json**:
```
{
  "root": true,
  "ignorePatterns": [
    "projects/**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "parserOptions": {
        "project": [
          "tsconfig.json"
        ],
        "createDefaultProgram": true
      },
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:prettier/recommended"
      ],
      "rules": {
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ]
      }
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [
        "plugin:@angular-eslint/template/recommended"
      ],
      "rules": {}
    },
    {
      "files": ["*.html"],
      "excludedFiles": ["*inline-template-*.component.html"],
      "extends": ["plugin:prettier/recommended"],
      "rules": {
        "prettier/prettier": ["error", { "parser": "angular" }]
      }
    }
  ]
}
```