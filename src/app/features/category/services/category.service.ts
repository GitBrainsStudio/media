import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable } from "rxjs";
import { CategoryModule } from "../category.module";
import { Category } from "../models/category.model";

@Injectable({providedIn:CategoryModule})
export class CategoryService
{
    baseEndpoint = './assets/posts';

    constructor(private http:HttpClient) { }

    getAll() : Observable<Category[]>
    {
        return this.http.get<Category[]>(`${this.baseEndpoint}/categories.json`)
            .pipe(delay(1000));
    }
}