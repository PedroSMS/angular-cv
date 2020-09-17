import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SkillsComponent } from './my-info/skills/skills.component';
import { AboutMeComponent } from './my-info/about-me/about-me.component';
import { ProjectsListComponent } from './my-info/projects-list/projects-list.component';
import { SoftSkillsComponent } from './my-info/soft-skills/soft-skills.component'
import { GitHubService } from './my-info/projects-list/git-hub.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocalProjectsService } from './my-info/projects-list/local-projects.service';


const appRoutes : Routes = [
  { path: '', component: WelcomePageComponent },
  { path:'my-info', component: MyInfoComponent },
  { path:'**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    MyInfoComponent,
    PageNotFoundComponent,
    SkillsComponent,
    AboutMeComponent,
    ProjectsListComponent,
    SoftSkillsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    TabsModule,
    NgbModule,
  ],
  providers: [
    GitHubService,
    LocalProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

