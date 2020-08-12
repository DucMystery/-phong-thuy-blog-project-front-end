import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/tokenStorage.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService,
              private tokenStorageService : TokenStorageService,
              private router : Router) { }

  ngOnInit(): void {
   this.authService.logout();
   this.tokenStorageService.signOut();
   console.log(this.tokenStorageService.getToken());
    this.router.navigate(['blogs'])
  }

}
