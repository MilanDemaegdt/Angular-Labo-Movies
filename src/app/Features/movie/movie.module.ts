import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    MovieDetailComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule, CoreModule
  ]
})
export class MovieModule { }
