import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogsComponent} from './blogs/blogs.component';
import {BlogDetailComponent} from './blogs/blog-detail/blog-detail.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {AccountEditComponent} from "./account/account-edit/account-edit.component";
import {SideRightComponent} from "./multi/side-right/side-right.component";
import {LayoutTemplatesFullComponent} from './layout-templates-full/layout-templates-full.component';

const routes: Routes = [
  {
    path: '',component:LayoutTemplatesFullComponent,
    children:[
      {path:'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule)}
    ]
  },
  {path: 'auth',loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)},
  {path: 'edit', component : AccountEditComponent},
  {path: 'side-right', component : SideRightComponent}
  {path: 'edit', component : AccountEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule],
  providers: [RouterModule]
})
export class AppRoutingModule {

}
