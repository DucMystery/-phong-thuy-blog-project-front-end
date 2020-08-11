import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {BlogsComponent} from "./blogs/blogs.component";

const routes: Routes = [
  {path: 'auth',loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)},
  {path: '', component: BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [RouterModule]
})
export class AppRoutingModule { }
