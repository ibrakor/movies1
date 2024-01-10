import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviePostComponent } from './components/movie-post/movie-post.component';
import { MoviePlotComponent } from './components/movie-plot/movie-plot.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    HeaderComponent,
    FooterComponent,
    MoviePostComponent,
    MoviePlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
