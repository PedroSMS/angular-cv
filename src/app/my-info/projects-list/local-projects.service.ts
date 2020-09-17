import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/models/Project';


@Injectable({
  providedIn: 'root'
})
export class LocalProjectsService {

  constructor(private http:HttpClient) { }

  getProjects(): Observable<Project[]>{
    return this.http.get('data/projects.json').pipe(
      map(data => {
        const projectsArray = [];
        for(const id in data){
          projectsArray.push(new Project(data[id].Id, data[id].Name, data[id].Url, data[id].Description, data[id].Stack));
        }
        return projectsArray;
      })
    )
  }
}
