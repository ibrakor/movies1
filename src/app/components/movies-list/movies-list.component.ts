import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../../Movies/Movie";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  post$ : Observable<Movie[]>

  selectedMovie: Movie

  constructor(private movieService: MovieService) {
    this.post$ = this.movieService.getMovies()
  }

  showInfo(movie: Movie){
    alert(
      `Title: ${movie.Title}\nYear: ${movie.Year}\nGenre: ${movie.Genre}\nActors: ${movie.Actors}\nPlot: ${movie.Plot}\nPoster: ${movie.Poster}`
    )
  }
  setSelected(movie: Movie){
    this.selectedMovie=movie
}
}
