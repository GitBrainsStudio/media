import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";
import { PostModule } from "../post.module";

@Injectable({providedIn:PostModule})
export class PostService
{
    baseEndpoint = './assets/posts';

    constructor(private http:HttpClient) { }

    getById(id:string): Observable<Post>
    {
        return this.http.get<Post>(`${this.baseEndpoint}/${id}/${id}.md`);
    }
}