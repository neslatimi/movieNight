import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
 
  id : number;
  movie : Movie;
  moviesSub$ : Subscription;


  constructor(
    private movieService : MovieService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.moviesSub$ = this.movieService.movie(this.id).subscribe(movie => {
      this.movie = movie;
      console.log(this.movie);
    })
  }

  ngOnDestroy(): void {
    this.moviesSub$.unsubscribe();
  }
}
