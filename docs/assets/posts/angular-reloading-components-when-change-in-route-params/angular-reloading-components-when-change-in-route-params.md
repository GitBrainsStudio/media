# Обновление компонента при смене маршрута

По умолчанию Angular не выполняет обновление компонента при смене маршрута, если мы уже в нём находимся.
Контент компонента просто-напросто никаким образом не изменяется.
Для решения этой проблемы на помощь приходит класс [RouteReuseStrategy](https://angular.io/api/router/RouteReuseStrategy).
Мы выполним наследование этого класса и чуть-чуть перепопределим следующим образом:

```
import { RouteReuseStrategy, ActivatedRouteSnapshot } from "@angular/router";

export class AppRouteReuseStrategy extends RouteReuseStrategy {
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
      return false;
    }
    store(route: ActivatedRouteSnapshot, handle: {}): void {
  
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
      return false;
    }
    retrieve(route: ActivatedRouteSnapshot) {
      return null;
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
      return false; 
    }
}
```

Остаётся только прокинуть наш кастомный класс в провайдеры app.module.ts

```
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: AppRouteReuseStrategy
    }
  ]
```