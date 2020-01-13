import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl: string = "http://www.omdbapi.com/?apikey=7c48579b";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(query: string): Observable<any> {
    return this.http.get(baseUrl, {
      params: {
        s: query
      }
    });
  }

  getMovieDetails(imdbID: string): Observable<any> {
    return this.http.get(baseUrl, {
      params: {
        i: imdbID
      }
    });
  }
}
