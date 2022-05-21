import { Component, OnInit } from '@angular/core';
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
    this.categoryService.getAll()
      .subscribe(categories => this.categories = categories);

    this.projectService.getAll()
      .subscribe(projects => this.projects = projects);
  }
}