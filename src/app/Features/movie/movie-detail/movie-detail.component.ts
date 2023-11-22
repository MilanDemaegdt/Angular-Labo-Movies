import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/core/movie.service';
import { Movie } from 'src/app/shared/movie.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie : Movie;
  title : string;
  constructor(private movieService : MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   // this.title= this.route.snapshot.paramMap.get('Title')
    // or book p.232
    this.route.paramMap.subscribe(params => {
      this.title = params.get('Title');});
      
    
    this.movieService.getMovie(this.title)
        .subscribe((movie: Movie) => this.movie = movie);
    
  
  }

  public gotoMovies(){
    
   /* You pass in an array of URL segments to Router.navigate.*/
    this.router.navigate(['/movie-list']);
   //or
   /* Router.navigateByUrl is similar to Router.navigate, except that a string is passed in instead of URL segments. 
    The navigation should be absolute and start with a /.*/
  // this.router.navigateByUrl('/movie-list')
  }
}

