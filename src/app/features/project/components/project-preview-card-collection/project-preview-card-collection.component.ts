import { Component, Input, OnInit } from '@angular/core';
import { OPACITY_ANIMATION } from 'src/app/features/animation/triggers/opacity.trigger';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-preview-card-collection',
  templateUrl: './project-preview-card-collection.component.html',
  styleUrls: ['./project-preview-card-collection.component.scss'],
  animations: [OPACITY_ANIMATION]
})
export class ProjectPreviewCardCollectionComponent implements OnInit {

  @Input() projects:Project[] | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}