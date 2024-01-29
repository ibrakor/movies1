import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieDetailComponent} from "./components/movie-detail/movie-detail.component";
import {MoviesListComponent} from "./components/movies-list/movies-list.component";

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent
  },
  {
    path: 'detail/:title',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
