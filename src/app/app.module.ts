import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

