import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { AboutComponent } from './components/about/about.component';
import { SimpsonsComponent } from './components/simpsons/simpsons.component';
import { PadreComponent } from './components/misc/padre/padre.component';
import { HijoComponent } from './components/misc/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    TodolistComponent,
    AboutComponent,
    SimpsonsComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
