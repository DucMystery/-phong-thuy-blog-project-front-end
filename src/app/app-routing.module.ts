import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutTemplatesFullComponent} from './layout-templates-full/layout-templates-full.component';
import {AlbumComponent} from "./album/album.component";

const routes: Routes = [
  {
    path: '', component: LayoutTemplatesFullComponent,
    children: [
      {path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule)}
    ]
  },
  //Module Album anh
  {
    path: 'images', component: AlbumComponent,

    loadChildren: () => import('./album/album.module').then(m => m.AlbumModule)
  },
  //Module auth(dang ky, dang nhap, dang xuat)
  {path: 'auth',
    loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)},
  //Module account chua thiet ke xong

  {path: 'accounts',loadChildren: ()=> import('./account/account.module').then(m => m.AccountModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule],
  providers: [RouterModule]
})
export class AppRoutingModule {

}
