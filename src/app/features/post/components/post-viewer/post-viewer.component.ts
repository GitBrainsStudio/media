import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OPACITY_ANIMATION } from 'src/app/features/animation/triggers/opacity.trigger';

@Component({
  selector: 'app-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.scss'],
  animations: [OPACITY_ANIMATION]
})
export class PostViewerComponent implements OnInit {

  @Input() src:string | null = null;
  isLoading:boolean = true;

  constructor(
    private router:Router
    ) { }

  ngOnInit(): void {
    
  }

  onLoad()
  {
    this.isLoading = false;
  }

  onError()
  {
    this.router.navigate(['/']);
  }
}