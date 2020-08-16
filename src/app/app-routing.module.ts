import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogsComponent} from './blogs/blogs.component';
import {BlogDetailComponent} from './blogs/blog-detail/blog-detail.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {AccountEditComponent} from "./account/account-edit/account-edit.component";
import {SideRightComponent} from "./multi/side-right/side-right.component";
import {AlbumComponent} from "./album/album.component";

const routes: Routes = [
  {
    path: 'blogs',
    loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule)
  },
  //Module Album anh
  {
    path:'images',component: AlbumComponent,
    loadChildren: () => import('./album/album.module').then(m =>m.AlbumModule)
  },
  //Module auth(dang ky, dang nhap, dang xuat)
  {path: 'auth',
    loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)},
  //Module account chua thiet ke xong
  {path: 'edit', component : AccountEditComponent},
  {path: 'side-right', component : SideRightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule],
  providers: [RouterModule]
})
export class AppRoutingModule {

}
