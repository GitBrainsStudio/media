# Авто-скролл страницы вверх после смены роута  

Параметр: scrollPositionRestoration: 'enabled'
```
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
```