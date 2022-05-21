import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable } from "rxjs";
import { Project } from "../models/project";
import { ProjectModule } from "../project.module";

@Injectable({providedIn:ProjectModule})
export class ProjectService
{
    baseEndpoint = './assets/projects';

    constructor(private http:HttpClient) { }

    getAll() : Observable<Project[]>
    {
        return this.http.get<Project[]>(`${this.baseEndpoint}/projects.json`)
            .pipe(delay(1000));
    }
}