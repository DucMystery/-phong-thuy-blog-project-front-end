import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AccountService} from '../services/account.service';
import {TokenStorageService} from '../services/tokenStorage.service';
import {IUser} from '../models/IUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  avatarUrl: string;
  account:IUser;
  constructor(private accountService: AccountService,
              private storage: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storage.getStatusLoggedOrLogout();
    this.avatarUrl = this.storage.getUserAvartar();
    this.getBlogById();
  }
  getBlogById(){
    this.accountService.findAccountById(this.storage.getAccountId()).subscribe((response: IUser) =>{
      this.account = response;
    })
  }

}
