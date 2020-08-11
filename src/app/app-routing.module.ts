import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogsComponent} from './blogs/blogs.component';
import {BlogDetailComponent} from './blogs/blog-detail/blog-detail.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from "@angular/common/http";

const routes: Routes = [
  {
    path: 'blogs',
    loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule)
  },
  {path: 'auth',loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule],
  providers: [RouterModule]
})
export class AppRoutingModule {

}
