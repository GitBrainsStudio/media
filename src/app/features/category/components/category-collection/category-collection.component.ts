import { Component, Input, OnInit } from '@angular/core';
import { OPACITY_ANIMATION } from 'src/app/features/animation/triggers/opacity.trigger';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-collection',
  templateUrl: './category-collection.component.html',
  styleUrls: ['./category-collection.component.scss'],
  animations: [OPACITY_ANIMATION]
})
export class CategoryCollectionComponent implements OnInit {

  @Input() categories:Category[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}