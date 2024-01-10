import {Component, Input} from '@angular/core';
import {Movie} from "../../Movies/Movie";

@Component({
  selector: 'app-movie-post',
  templateUrl: './movie-post.component.html',
  styleUrl: './movie-post.component.css'
})
export class MoviePostComponent {

 @Input() movie: Movie
}
