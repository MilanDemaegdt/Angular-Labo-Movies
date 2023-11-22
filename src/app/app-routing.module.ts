import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from './Features/admin/under-construction/under-construction.component';
import { LoginComponent } from './Features/login/login/login.component';
import { MovieDetailComponent } from './Features/movie/movie-detail/movie-detail.component';
import { MovieListComponent } from './Features/movie/movie-list/movie-list.component';
import { AboutComponent } from './Features/about/about/about.component';


const routes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-detail/:Title', component: MovieDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: UnderConstructionComponent },
  { path: '', redirectTo: '/movie-list', pathMatch: 'full' },
  /*The second  matching strategy is full. When it’s specified for a route, 
  the router will check if the the path is exactly equal to the path of 
  the current browser’s URL:*/
  { path: '**', component: UnderConstructionComponent }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }