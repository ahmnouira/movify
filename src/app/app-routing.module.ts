import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


const routes: Routes = [

  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'movies', component: ListMoviesComponent
  },
  {
    path: 'movie-details/:imdbID', component: MovieDetailsComponent
  },
  {
    path: '**', redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
