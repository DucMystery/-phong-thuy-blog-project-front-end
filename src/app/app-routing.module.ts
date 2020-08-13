import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AccountEditComponent} from "./account/account-edit/account-edit.component";

const routes: Routes = [
  {
    path: 'blogs',
    loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule)
  },
  {path: 'auth',loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)},
  {path: 'edit', component : AccountEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // ReactiveFormsModule,
    // FormsModule
  ],
  // providers: [RouterModule]
  exports:[RouterModule]
})
export class AppRoutingModule {

}
