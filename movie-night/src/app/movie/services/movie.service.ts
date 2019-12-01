import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { movies } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(){
    //give us the movies as a observable from the movie.model.ts
    //must be imported from the folder on the top
    return of(movies)
  }

  movie(id :number){
    // the plus sign its convert any string into a number
    return of(movies.find(movie => +movie.id === +id));
  }
}
