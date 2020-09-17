import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/Project';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': `application/vnd.github.mercy-preview+json`
    });
    const projectsArray = [];
    return this.http.get<Project[]>('https://api.github.com/users/PedroSMS/repos', { headers: headers }).pipe(
      map(data => {
        for(const id in data){
          projectsArray.push(
            new Project(data[id]['id'], data[id]['name'],data[id]['html_url'], data[id]['description'], data[id]['topics'])
            );
          }
          return projectsArray;
        })
      )
  }
}
