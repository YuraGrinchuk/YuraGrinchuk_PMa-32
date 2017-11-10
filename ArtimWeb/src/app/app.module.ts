import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { PhotoDivComponent } from './home/photo-div/photo-div.component';
import { HowWeComponent } from './home/how-we/how-we.component';
import { EmployersComponent } from './home/employers/employers.component';
import { FourBlocksComponent } from './home/four-blocks/four-blocks.component';
import { LampTreeComponent } from './home/lamp-tree/lamp-tree.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';

import {RouterModule,Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRotes:Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'login',
    component: LogInComponent  
  },
  {
    path:'dashboard',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotoDivComponent,
    HowWeComponent,
    EmployersComponent,
    FourBlocksComponent,
    LampTreeComponent,
    HomeComponent,
    LogInComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRotes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
