import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-preview-card',
  templateUrl: './project-preview-card.component.html',
  styleUrls: ['./project-preview-card.component.scss']
})
export class ProjectPreviewCardComponent implements OnInit {

  @Input() project:Project | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
