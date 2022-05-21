import { Component, OnInit } from '@angular/core';
import { forkJoin, mergeMap } from 'rxjs';
import { Category } from 'src/app/features/category/models/category.model';
import { CategoryService } from 'src/app/features/category/services/category.service';
import { Project } from 'src/app/features/project/models/project';
import { ProjectService } from 'src/app/features/project/services/project.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  categories:Category[] | null = null;
  projects:Project[] | null = null;

  constructor(
    private categoryService:CategoryService,
    private projectService:ProjectService) { }

  ngOnInit(): void {
    forkJoin(
      this.categoryService.getAll(), 
      this.projectService.getAll())
    .subscribe(([categories,projects]) => 
      {
        this.categories = categories;
        this.projects = projects;
      })
  }
}