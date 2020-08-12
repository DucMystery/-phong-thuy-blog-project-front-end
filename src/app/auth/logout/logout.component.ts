import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/tokenStorage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService,
              private rouuter : Router) { }

  ngOnInit(): void {
    this.tokenStorageService.signOut();
    this.rouuter.navigate(['blog'])
  }

}
