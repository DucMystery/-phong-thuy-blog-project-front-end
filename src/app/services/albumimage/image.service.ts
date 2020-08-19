import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {IAlbum} from "../../models/albumimage/IAlbum";
import {IImage} from "../../models/albumimage/IImage";

const IMAGES_API = 'http://localhost:8080/api/v1/images/';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImageDetailList(albumId: number):Observable<IImage[]> {
   return this.http.get<IImage[]>(IMAGES_API+ 'album/'+ albumId)
  }
  saveImage(albumId: number, image : IImage) : Observable<any> {
    return this.http.post(IMAGES_API+'album/'+ albumId,image);
  }
  get
}
