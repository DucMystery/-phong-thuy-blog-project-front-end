import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/tokenStorage.service";
import {IUser} from "../../models/IUser";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-side-right',
  templateUrl: './side-right.component.html',
  styleUrls: ['./side-right.component.css']
})
export class SideRightComponent implements OnInit {
  id: number;
  isLoggedIn: boolean;
  avatarUrl: string;
  account: IUser;

  constructor(private  storage: TokenStorageService,
              private accountService: AccountService) { }

  ngOnInit(): void {
    this.isLoggedIn= this.storage.getStatusLoggedOrLogout();
    this.avatarUrl = this.storage.getUserAvartar();
    this.findAccount();
  }

  findAccount(){
    this.id = +this.storage.getAccountId();
    this.accountService.findAccountById(this.id).subscribe( data => {
      this.account = data;
      console.log(data);
    })
  }

}
