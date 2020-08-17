import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {IUser} from '../models/IUser';

const AUTH_API = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class AuthService {

  private currentUSerSubject: BehaviorSubject<any>;
  public currentUser : Observable<any>;
  constructor(private http: HttpClient) {
    this.currentUSerSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem("currentUser")));
    this.currentUser = this.currentUSerSubject.asObservable();
  }

  public get currentUserValue():any {
    return this.currentUSerSubject.value;
  }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  register(user: IUser): Observable<any> {
    return this.http.post(AUTH_API + 'api/accounts/create', user);
  }
  logout(){
    return this.http.get(AUTH_API+'logout');
  }
}
