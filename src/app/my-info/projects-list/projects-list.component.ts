import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { GitHubService } from './git-hub.service';
import { LocalProjectsService } from './local-projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projectsAll: Project[] = [];
  page: number = 1;
  pageSize: number = 4;
  itsAllLoaded: boolean = false;
  collectionSize: number = 0;
  projects: Project[] = [];

  constructor(private gitHubService: GitHubService, private localProjectsService: LocalProjectsService) { }

  ngOnInit(): void {
   this.getAllProjects();
  }

  getAllProjects(){
    this.getLocalProjects().then(
      (data) => {
        this.projectsAll = data as Project[];
      }
    ).then(
      () => {
        this.getGitHubProjects().then(
          (data) => {
            for(const id in data as Project){
                this.projectsAll.push(data[id]);
            }
          }
        ).then(
          () => {
            this.collectionSize = this.projectsAll.length;
            this.refreshProjects();
            this.itsAllLoaded = true;
          }
        )
      }
    )
  }

  getLocalProjects(){
    return new Promise((resolve, reject) => {
      this.localProjectsService.getProjects().subscribe(
        data => {
          resolve(data);
        }
      )
    })
  }

  getGitHubProjects(){
    return new Promise((resolve, reject) => {
      this.gitHubService.getProjects().subscribe(
        data => {
          resolve(data);
        }
      )
    })
  }

  refreshProjects() {
    this.projects = this.projectsAll
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
