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
  id:number;
  constructor(private accountService: AccountService,private token:TokenStorageService) {}

  ngOnInit(): void {
    this.id= + this.token.getAccountId();
  }


}
