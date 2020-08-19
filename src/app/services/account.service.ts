import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";
import {IBlog} from '../models/iblog';
const ACCOUNT_API = 'http://localhost:8080/api/accounts/';
@Injectable({providedIn: 'root'})
export class AccountService {
  avatarUrl: string;
  constructor(private http: HttpClient) { }
save(imgUrl: IUser) :Observable<any>{
    return this.http.post(ACCOUNT_API+'create',imgUrl);
}
findAccountById(id : number) : Observable<any> {
    return this.http.get(ACCOUNT_API+id+'/details')
}
editAccount(id : number, account: IUser) : Observable<any> {
    return this.http.put(ACCOUNT_API+id+'/edit',account);
}

  getAllAccount():Observable<IUser[]>{
    return this.http.get<IUser[]>(ACCOUNT_API);
  }
}
