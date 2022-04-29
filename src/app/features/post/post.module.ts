import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCategoryCollectionComponent } from './components/post-category-collection/post-category-collection.component';
import { PostPreviewCardComponent } from './components/post-preview-card/post-preview-card.component';

@NgModule({
  declarations: [
    PostPreviewCardComponent,
    PostCategoryCollectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostCategoryCollectionComponent
  ]
})
export class PostModule { }