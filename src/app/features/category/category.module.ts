import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCollectionComponent } from './components/category-collection/category-collection.component';
import { PostModule } from '../post/post.module';
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

@NgModule({
  declarations: [
    CategoryCollectionComponent
  ],
  imports: [
    CommonModule,
    PostModule,
    NgxSkeletonLoaderModule.forRoot()
  ],
  exports: [
    CategoryCollectionComponent
  ]
})
export class CategoryModule { }