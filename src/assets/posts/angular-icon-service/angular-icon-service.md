# Использование кастомных svg иконок совместно с material-icon

**Angular Material** предлагает достаточное количество svg иконок из коробки. Но к сожалению, они не всегда подходят под дизайн проекта.
Решить эту ситуацию довольно просто, через кастомную службу IconService:

```
import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class IconService {
    private _icons: string[] = [
        'calendar',
        'check',
        'dashboard',
        'dots',
        'home',
        'person-add',
        'statistic',
        'notification',
        'settings',
        'search'
    ];

    constructor(private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer) {
    }

    init() {
        this._icons.forEach(icon => this.add(icon));
    }

    private add(name: string) {
        this.matIconRegistry.addSvgIcon(
            name,
            this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.APP_URL}assets/mat-icons/${name}.svg`)
        );
    }
}
```

Все кастомные svg иконки кладём в папку assets. 

Затем инжектим наш сервис в app.component.ts и выполняем инициализацию:
```
export class AppComponent implements OnInit {

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
    this.iconService.init();
  }
}
```

После этого мы можем использовать кастомную svg иконку следующим образом:

```
 <mat-icon svgIcon="add"></mat-icon>
```