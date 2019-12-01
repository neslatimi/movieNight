import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'movies',
    pathMatch:'full'
  },
  {
    //this one for the lazy loading --> loadChildren()
    //create a movie-routing-modul.ts and setting up there too
    path:'movies',
    loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
