import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {


  movie: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() : void {

    this.activatedRoute.params.subscribe((params: Params) => {
      let id: string = params['imdbID'];
      this.movie = this.movieService.getMovieDetails(id);
    })

  }

  goBack() : void {
    window.history.back();
  }

}
