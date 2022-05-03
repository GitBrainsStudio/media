import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPreviewCardComponent } from './components/post-preview-card/post-preview-card.component';
import { RouterModule } from '@angular/router';
import { PostViewerComponent } from './components/post-viewer/post-viewer.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    PostPreviewCardComponent,
    PostViewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    NgxSkeletonLoaderModule.forRoot()
  ],
  exports: [
    PostPreviewCardComponent,
    PostViewerComponent
  ]
})
export class PostModule { }