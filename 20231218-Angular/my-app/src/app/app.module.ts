import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HijoComponent } from './components/misc/hijo/hijo.component';
import { PadreComponent } from './components/misc/padre/padre.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RickandmortyCardComponent } from './components/rickandmorty/rickandmorty-card/rickandmorty-card.component';
import { RickandmortyListComponent } from './components/rickandmorty/rickandmorty-list/rickandmorty-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SimpsonsComponent } from './components/simpsons/simpsons.component';
import { TodolistComponent } from './components/todolist/todolist.component';

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
    HijoComponent,
    RickandmortyListComponent,
    RickandmortyCardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
