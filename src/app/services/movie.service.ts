import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Movie } from "../models/movie.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class MovieService {

  private serviceURL = 'https://capacitacion-angular.herokuapp.com/';
  private movieEndPoint = 'movies';

  constructor(private http:Http) { }

  getMovies():Observable<Movie[]>{
    return this.http.get(this.serviceURL + this.movieEndPoint)
      .map((response:Response) => <Movie[]>response.json())
      .do(data => console.log(JSON.stringify(data)));
  }
}
