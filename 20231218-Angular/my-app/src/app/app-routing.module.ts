import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { RickandmortyCardComponent } from './components/rickandmorty/rickandmorty-card/rickandmorty-card.component';
import { RickandmortyListComponent } from './components/rickandmorty/rickandmorty-list/rickandmorty-list.component';
import { SimpsonsComponent } from './components/simpsons/simpsons.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const projectsRoutes: Routes = [
  { path: 'todolist', component: TodolistComponent },
  { path: 'simpsons', component: SimpsonsComponent },
  { path: 'rickandmorty', component: RickandmortyListComponent },
  { path: 'rickandmorty/:idCharacter', component: RickandmortyCardComponent },
];

const routes: Routes = [
  { path: 'projects', children: projectsRoutes },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
