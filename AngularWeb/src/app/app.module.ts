import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PhotoDivComponent } from './photo-div/photo-div.component';
import { LampTreeFonComponent } from './lamp-tree-fon/lamp-tree-fon.component';
import { FourBlocksComponent } from './four-blocks/four-blocks.component';
import { HowWeFonComponent } from './how-we-fon/how-we-fon.component';
import { EmployersFonComponent } from './employers-fon/employers-fon.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotoDivComponent,
    LampTreeFonComponent,
    FourBlocksComponent,
    HowWeFonComponent,
    EmployersFonComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
