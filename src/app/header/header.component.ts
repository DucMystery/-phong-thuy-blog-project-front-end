import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AccountService} from '../services/account.service';
import {TokenStorageService} from '../services/tokenStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private accountService: AccountService,
              private storage: TokenStorageService) {}
  id:number;
  ngOnInit(): void {
    this.isLoggedIn = this.storage.getStatusLoggedOrLogout();
    this.id= + this.storage.getAccountId();
  }

}
