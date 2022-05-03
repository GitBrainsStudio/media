import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsPageRoutingModule } from './post-details-page-routing.module';
import { PostDetailsPageComponent } from './post-details-page.component';
import { PostModule } from 'src/app/features/post/post.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { CategoryModule } from 'src/app/features/category/category.module';

@NgModule({
  declarations: [
    PostDetailsPageComponent
  ],
  imports: [
    CommonModule,
    PostDetailsPageRoutingModule,
    PostModule,
    HeaderModule,
    FooterModule,
    CategoryModule
  ],
  exports: [
    PostDetailsPageComponent
  ]
})
export class PostDetailsPageModule { }