import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IAlbum} from "../../models/albumimage/IAlbum";
import {Observable} from "rxjs";
const IMAGES_API = 'http://localhost:8080/api/v1/albums/'
@Injectable({providedIn: 'root'})
export class AlbumService {
constructor(private http: HttpClient) {
}
save(albumTitle : IAlbum) : Observable<any> {
  return this.http.post(IMAGES_API, albumTitle);
}
}
