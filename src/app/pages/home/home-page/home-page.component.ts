import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, mergeMap, ReplaySubject, takeUntil } from 'rxjs';
import { Category } from 'src/app/features/category/models/category.model';
import { CategoryService } from 'src/app/features/category/services/category.service';
import { Project } from 'src/app/features/project/models/project';
import { ProjectService } from 'src/app/features/project/services/project.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  categories:Category[] | null = null;
  projects:Project[] | null = null;

  constructor(
    private categoryService:CategoryService,
    private projectService:ProjectService) { }

  ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }

  ngOnInit(): void {

    this.categoryService.getAll()
    .pipe(takeUntil(this.destroy))
    .subscribe(categories => 
      {
        this.categories = categories;
      });

    this.projectService.getAll()
    .pipe(takeUntil(this.destroy))
    .subscribe(projects => 
      {
        this.projects = projects;
      });
  }
}