import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPreviewCardCollectionComponent } from './components/project-preview-card-collection/project-preview-card-collection.component';
import { ProjectPreviewCardComponent } from './components/project-preview-card/project-preview-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    ProjectPreviewCardCollectionComponent,
    ProjectPreviewCardComponent
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule.forRoot()
  ],
  exports: [
    ProjectPreviewCardCollectionComponent,
  ]
})
export class ProjectModule { }