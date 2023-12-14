import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { SimpsonsComponent } from './components/simpsons/simpsons.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [
  { path: 'projects', pathMatch: 'full', redirectTo: 'projects/todolist' },
  { path: 'projects/todolist', component: TodolistComponent },
  { path: 'projects/simpsons', component: SimpsonsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
