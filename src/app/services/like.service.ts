import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ILike} from '../models/iLike';
import {HttpClient} from '@angular/common/http';
import {IBlog} from '../models/iblog';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  url=environment.apiUrl+'/api/likes/';

  constructor(private  http:HttpClient) { }

  likeSubmit(like:any):Observable<ILike>{
    return this.http.post<ILike>(this.url+'add',like);
  }
  getLikeByBlog(id):Observable<IBlog>{
    return this.http.get<IBlog>(this.url+id+'/blog');
  }
}
