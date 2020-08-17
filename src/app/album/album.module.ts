import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AlbumCreateComponent } from './album-create/album-create.component';
import { ImageUploadComponent } from './album-create/image-upload/image-upload.component';
import { AlbumComponent } from './album.component';
import {RouterModule, Routes} from "@angular/router";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/database";
const routes: Routes = [
  {path:"upload/image",component:ImageUploadComponent  },
  {path:"upload", component: AlbumCreateComponent}
  ];

@NgModule({
      declarations: [ AlbumCreateComponent, ImageUploadComponent, AlbumComponent],
  exports: [
    AlbumCreateComponent,
    ImageUploadComponent
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
