import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumCreateComponent } from './album-create/album-create.component';




@NgModule({
      declarations: [ AlbumDetailComponent, AlbumCreateComponent],
  exports: [
    AlbumDetailComponent,
    AlbumCreateComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class AlbumModule { }
