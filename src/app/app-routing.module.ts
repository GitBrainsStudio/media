import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/home/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'posts/:id', 
    loadChildren: () => import('./pages/post/post-details-page/post-details-page.module').then(m => m.PostDetailsPageModule)
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
