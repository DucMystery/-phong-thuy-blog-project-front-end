import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  url=environment.apiUrl+'/api/likes/';

  constructor() { }
}
