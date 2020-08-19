import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AlbumComponent } from './album.component';
import {RouterModule, Routes} from "@angular/router";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AlbumCreateComponent} from "./album-create/album-create.component";
import { AlbumDetailsComponent } from './album-details/album-details.component';
import {AuthGuard} from '../_interceptor/auth.guard';
const routes: Routes = [
  {path:"upload", component:AlbumCreateComponent,canActivate: [AuthGuard]}
  ];

@NgModule({
      declarations: [ AlbumCreateComponent,AlbumComponent, AlbumDetailsComponent],
  exports: [
    AlbumCreateComponent
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
export class AlbumModule { }
