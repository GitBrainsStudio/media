import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { PostModule } from 'src/app/features/post/post.module';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { FooterModule } from 'src/app/features/footer/footer.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    PostModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
