import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieItemComponent } from './movies/movies-list/movie-item/movie-item.component';
import { HeaderComponent } from './header/header.component';
import { MoviesAddComponent } from './movies-add/movies-add.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesListComponent,
    MovieItemComponent,
    HeaderComponent,
    MoviesAddComponent,
    MoviesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
