# Анимация появления элементов

OPACITY_ANIMATION_TRIGGER

```
import { trigger, transition, style, animate } from '@angular/animations';

export const OPACITY_ANIMATION_TRIGGER = trigger('opacityAnimation', [
  transition(':enter', [
    style({ opacity: '0' }),
    animate('200ms', style({ opacity: '1' }))
  ]),
  transition(':leave', [
    style({ opacity: '1' }),
    animate('200ms', style({ opacity: '0' }))
  ])
]);
```

TRANSFORM_ANIMATION_TRIGGER

```
import { animate, style, transition, trigger } from '@angular/animations';

export const TRANSFORM_ANIMATION_TRIGGER = trigger('transformAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(-80%)', opacity: '0' }),
    animate('200ms', style({ transform: 'translateY(0)', opacity: '1' }))
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: '1' }),
    animate('200ms', style({ transform: 'translateY(-80%)', opacity: '0' }))
  ])
]);
```