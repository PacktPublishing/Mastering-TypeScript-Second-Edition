import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { LoginComponent } from './login.component';
import { SideNavComponent } from './sidenav.component';
import { RightScreenComponent } from './rightscreen.component';
import { BoardListComponent } from './boardlist.component';


@NgModule({
  declarations: [
    AppComponent
    ,NavbarComponent
    ,SideNavComponent
    ,RightScreenComponent
    ,BoardListComponent
    ,LoginComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
