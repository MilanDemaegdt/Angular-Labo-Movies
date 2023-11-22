import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/core/movie.service';
import { Movie } from 'src/app/shared/movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies : Movie[];


  constructor(private movieService : MovieService, private router: Router) {}

  ngOnInit() {  this.movieService.getMovies()
    .subscribe((movies: Movie[]) => this.movies = movies);}

   public onSelect(movie : Movie){
   
    console.log (movie.Title);
    //You pass in an array of URL segments
   // this.router.navigate(['/movie-detail', movie.Title]);
    //Router.navigateByUrl is similar to Router.navigate, except that a string is passed in instead of URL segments. 
    this.router.navigateByUrl(`/movie-detail/${movie.Title}`);
  }

  }
