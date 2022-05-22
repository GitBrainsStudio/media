import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { PostModule } from 'src/app/features/post/post.module';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { CategoryModule } from 'src/app/features/category/category.module';
import { ProjectModule } from 'src/app/features/project/project.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CategoryModule,
    HeaderModule,
    FooterModule,
    ProjectModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
