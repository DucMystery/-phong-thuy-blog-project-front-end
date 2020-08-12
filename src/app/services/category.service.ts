import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICategory} from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = environment.apiUrl + '/api/categories/list'
  constructor(private http: HttpClient) { }

  getAll(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.url);
  }
}
