# Реализация анимации arrow link

Разметка html:
```
<html lang="ru">
   <head>
      <meta charset="utf-8">
      <title>Arrow link animation</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="style.css">
   </head>
   <body>
      <div class="container">
         <div class="arrow-links">
            <a href="#" class="arrow-link">
               <span class="arrow-link__text">Gold ссылка</span>           
               <svg class="arrow-link__icon" width="100%" height="100%" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                  <path d="M1.49985 1.00002L9.27803 8.7782L1.49985 16.5564" stroke-width="2"></path>
               </svg>
            </a>
            <a href="#" class="arrow-link arrow-link--white">
               <span class="arrow-link__text">White ссылка</span>           
               <svg class="arrow-link__icon" width="100%" height="100%" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                  <path d="M1.49985 1.00002L9.27803 8.7782L1.49985 16.5564" stroke-width="2"></path>
               </svg>
            </a>
         </div>
      </div>
   </body>
</html>
```

Стилизация css:
```
:root
{
    --orange: #f06d06;
    --white: #fff;
    --black: #333;
    --gray: #666666;
    --gray-medium: #999999;
    --gray-light: #E1E1E1;
    --gold: #CC9933;
    --gold-dark: #A47312;
    --gold-light: #E9C479;
    --yellow: #FFCC66;
}

body
{
    background: var(--orange);
    font-family: Arial, Verdana, sans-serif;
}

.container
{
    margin: 0 auto;
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}

.arrow-links
{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    background-color: var(--black);
    padding: 10px;
    border-radius: 15px;
    width: 300px;
    height: 300px;
}

.arrow-link
{
    text-decoration: none;
    color: var(--gold);
    transition: color .2s ease;

    display: flex;
    align-items: center;
}

.arrow-link:not(:last-child)
{
    margin-bottom: 20px;
}

.arrow-link__text
{
    margin-right: 4px;
    white-space: nowrap;
}

.arrow-link__icon
{
    height: 12px;
    transition: .2s;
}

.arrow-link__icon path
{
    stroke: var(--gold);
    transition: stroke .2s ease;
}

.arrow-link:hover
{
    cursor: pointer;
    color: var(--gold-light);
}

.arrow-link:hover .arrow-link__icon
{
    margin-left: 5px;
}

.arrow-link:hover .arrow-link__icon path
{
    stroke: var(--gold-light);
}

.arrow-link:active
{
    color: var(--gold-dark);
}

.arrow-link:active .arrow-link__icon path
{
    stroke: var(--gold-dark);
}

.arrow-link:focus-visible
{
    color: var(--gold);
    outline: 1px var(--gold) solid;
    outline-offset: 4px;
}

.arrow-link:focus-visible .arrow-link__icon path
{
    stroke: var(--gold);
}

.arrow-link--white
{
    color: var(--white);
}

.arrow-link--white .arrow-link__icon path
{
    stroke: var(--white);
}

.arrow-link--white:hover .arrow-link__icon path
{
    stroke: var(--gold-light);
}

.arrow-link--white:active .arrow-link__icon path
{
    stroke: var(--gold-dark);
}

.arrow-link--white:focus-visible .arrow-link__icon path
{
    stroke: var(--gold);
}
```

Продублировано на CodePen: <https://codepen.io/GitBrains/pen/OJQqJBL>

Продублировано в zip архиве: <https://gitbrainsstudio.github.io/media/assets/posts/css-arrow-link-animation/css-arrow-link-animation.zip>