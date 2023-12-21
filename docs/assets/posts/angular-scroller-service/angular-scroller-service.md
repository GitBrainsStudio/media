# Плавный скролл к необходимому элементу через службу

🍗

```
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollerService {
  scrollToElement(element: HTMLElement): void {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}
```