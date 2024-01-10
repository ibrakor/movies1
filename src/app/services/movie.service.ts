import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Movie} from "../Movies/Movie";
import {MOVIES} from "../Movies/MockMovies";

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor() { }

  getMovies(): Observable<Movie[]>{
    return of(MOVIES)
  }
}
