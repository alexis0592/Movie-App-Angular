import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../services/movie.service";
import { Movie } from "../../models/movie.model";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  providers:[MovieService]
})
export class MoviesListComponent implements OnInit {

  moviesList:Movie[];

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getMovies()
      .subscribe(movieList => this.moviesList = movieList);
  }

}
