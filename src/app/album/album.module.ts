import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlbumComponent} from './album.component';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AlbumCreateComponent} from './album-create/album-create.component';
import {AuthGuard} from '../_interceptor/auth.guard';
import {AlbumListComponent} from './album-list/album-list.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  {path: 'upload', component: AlbumCreateComponent, canActivate: [AuthGuard]},
  {path: ':id/album', component: AlbumListComponent, canActivate: [AuthGuard]},
  {path: ':id/listImage', component: ImagesComponent}

];

@NgModule({
  declarations: [AlbumCreateComponent, AlbumComponent, AlbumListComponent, ImagesComponent],
  exports: [
    AlbumCreateComponent,
    AlbumListComponent,
    ImagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    RouterModule.forChild(routes)
  ]
})
export class AlbumModule {
}
