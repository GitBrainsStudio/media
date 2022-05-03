import { Component, Input, OnInit } from '@angular/core';
import { PostPreview } from '../../models/post-preview.model';

@Component({
  selector: 'app-post-preview-card',
  templateUrl: './post-preview-card.component.html',
  styleUrls: ['./post-preview-card.component.scss']
})
export class PostPreviewCardComponent implements OnInit {
  
  @Input() postPreview:PostPreview | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
