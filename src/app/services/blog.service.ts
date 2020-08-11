import { Injectable } from '@angular/core';
import {Iblog} from '../interface/iblog';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private URL='http://localhost:8080/api/blogs/'


  constructor(private http:HttpClient) {

  }
  getAllBlogByTime():Observable<Iblog>{
    return this.http.get<Iblog>(this.URL+'list');
  }

  getBlogById(id:number):Observable<Iblog>{
    return this.http.get<Iblog>(this.URL+id+'/search');
  }
}
