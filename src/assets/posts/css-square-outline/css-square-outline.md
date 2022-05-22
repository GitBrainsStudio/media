# Как сделать квадратный аутлайн, если фокусируемый блок не квадратный

Разметка html:
```
<div class="cards">
  <div class="card">
    <div class="card__title">
      Заголовок карточки
    </div>
    <div class="card__content">
      Контент карточки
    </div>
    <a href="" class="card__link">
      Ссылка карточки
    </a>
  </div>
</div>
```

Стилизация css:
```
body {
  font-family: system-ui;
  background: #f06d06;
  color: white;
}

.cards
{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.card
{
  position:relative;
  width: 320px;
  border-radius: 10px;
  border: 1px white solid;
  text-align:center;
  padding: 10px;
}

.card__title
{
  font-size: 22px;
  font-weight: 600;
}

.card__link
{
  color: white;
  outline: none;
}

.card__link:focus::before
{
  display:block;
  content:"";
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  outline: 1px white solid;
  outline-offset: 4px;
}
```

Продублировано на CodePen: <https://codepen.io/GitBrains/pen/JjpGWQM>

Продублировано в zip архиве: <https://gitbrainsstudio.github.io/media/assets/posts/css-square-outline/css-square-outline.zip>