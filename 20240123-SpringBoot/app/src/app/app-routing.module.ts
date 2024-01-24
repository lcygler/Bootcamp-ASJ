import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/main/detail/detail.component';
import { FormComponent } from './components/main/form/form.component';
import { ListComponent } from './components/main/list/list.component';

const videosRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'add', component: FormComponent },
  { path: 'edit/:videoId', component: FormComponent },
  { path: ':videoId', component: DetailComponent },
];

const routes: Routes = [
  { path: 'videos', children: videosRoutes },
  { path: '', pathMatch: 'full', redirectTo: 'videos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
