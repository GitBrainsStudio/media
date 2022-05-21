import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Observable, of, ReplaySubject, takeUntil } from 'rxjs';
import { Category } from 'src/app/features/category/models/category.model';
import { CategoryService } from 'src/app/features/category/services/category.service';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.scss']
})
export class PostDetailsPageComponent implements OnInit, OnDestroy {

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  get id()
  {
    return this.activatedRoute.snapshot.params['id'];
  }
  src = `assets/posts/${this.id}/${this.id}.md`;
  categories:Category[] | null = null;

  constructor(
    private activatedRoute:ActivatedRoute,
    private categoryService:CategoryService) { }

  ngOnDestroy(): void {
      this.destroy.next(null);
      this.destroy.complete();
    }
  
  ngOnInit(): void {
    this.categoryService.getAll()
      .pipe(mergeMap((categories:Category[]) => this.filterCategories(categories)))
      .pipe(takeUntil(this.destroy))     
      .subscribe(categories => 
        {
          this.categories = categories;
        });        
  }

  filterCategories(categories:Category[]) : Observable<Category[]>
  {
    let array:Category[] = [];

    categories.forEach((category:Category) => {
      category.posts = category.posts.filter(post => post.id != this.id);
      if (category.posts.length > 0)
      {
        array.push(category);
      }
    });

    return of(array);
  }
}