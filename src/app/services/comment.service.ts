import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ICategory} from '../models/icategory';
import {Icomment} from '../models/icomment';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {IBlog} from '../models/iblog';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url=environment.apiUrl+'/api/comments/'

  constructor(private http:HttpClient) { }

  getAllCommentByBlog():Observable<Icomment[]>{
    // return this.http.get<Icomment>(this.url+'/api/comments/blog');
    return this.http.get<Icomment[]>(this.url);
  }

  saveComment(comment:any):Observable<Icomment>{
    return this.http.post<Icomment>(this.url+'add',comment);
  }



}
