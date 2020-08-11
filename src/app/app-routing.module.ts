import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogsComponent} from './blogs/blogs.component';
import {BlogDetailComponent} from './blogs/blog-detail/blog-detail.component';


const routes: Routes = [
  {path: 'blogs',
    loadChildren: () => import('../blogs/blgos.module').then(m => m.AdminModule),
    canActivate: [AdminGuard],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
