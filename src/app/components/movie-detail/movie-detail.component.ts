import {Component, OnInit} from '@angular/core';
import {Movie} from "../../Movies/Movie";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{
  movie: Movie

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  getMovie() {
    const title: string = '' + this.route.snapshot.paramMap.get('title');
    this.movieService.getMovieByName(title).subscribe(movie =>
      this.movie = movie!!
    )
  }

  ngOnInit(): void {
    this.getMovie()
  }
}
