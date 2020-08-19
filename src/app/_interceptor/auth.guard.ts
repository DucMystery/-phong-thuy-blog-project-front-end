import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import {IUser} from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  currentUser: String;
  constructor(private router: Router,
              private authService: AuthService) {
    this.authService.currentUser.subscribe( user => {
      this.currentUser = user;
    })
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.currentUser) {
      return true;
    }else {
      this.router.navigate(['/auth/login'],{queryParams: {returnUrl: state.url}});
      return false;
    }
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    return true;
  }
}
