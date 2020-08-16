import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { AlbumComponent } from './album.component';
import {RouterModule, Routes} from "@angular/router";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/database";
const routes: Routes = [
  {path:"upload/image",component:AlbumCreateComponent  },
  {path:"upload", component: AlbumDetailComponent}
  ];

@NgModule({
      declarations: [ AlbumDetailComponent, AlbumCreateComponent, AlbumComponent],
  exports: [
    AlbumDetailComponent,
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
