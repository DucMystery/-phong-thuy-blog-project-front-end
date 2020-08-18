import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../models/IUser';

const AUTH_API = 'http://localhost:8000/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  register(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'api/accounts/create', user);
  }
  logout(){
    return this.http.get(AUTH_API+'logout');
  }
}
