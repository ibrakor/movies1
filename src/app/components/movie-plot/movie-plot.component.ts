import {Component, Input} from '@angular/core';
import {Movie} from "../../Movies/Movie";

@Component({
  selector: 'app-movie-plot',
  templateUrl: './movie-plot.component.html',
  styleUrl: './movie-plot.component.css'
})
export class MoviePlotComponent {
  @Input() movie: Movie

}
