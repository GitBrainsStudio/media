import { trigger, transition, style, animate } from "@angular/animations";


export const SLIDE_IN_OUT_ANIMATION = trigger('slideInOut', [
  transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate('400ms ease-in', style({transform: 'translateX(0%)'}))
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
  ])
])