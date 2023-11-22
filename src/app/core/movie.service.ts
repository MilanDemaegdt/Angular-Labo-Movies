import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Movie } from '../shared/movie.interface';

const API_URL: string = environment.MovieURL

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  constructor(private http: HttpClient) { }
  getMovies(): Observable<Movie[]> {
    
    return this.http.get<Movie[]>(API_URL)
      .pipe(
        tap (result => { console.log ("opgehaald data :" ,result)}),
       /* catchError(err => {console.log (err)} )*/
      );

  }
  getMovie(Title: string): Observable<Movie> {
    return this.http.get<Movie[]>(API_URL)
      .pipe(
        map(movies => {
          const movie = movies.filter((cust: Movie) => cust.Title === Title);
          return (movie && movie.length) ? movie[0] : null;
        }),
      
      );
  }
}
