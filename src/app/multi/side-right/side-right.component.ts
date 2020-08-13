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
  isLoggedIn: boolean;
  avatarUrl: string;
  accounts: IUser[];
  constructor(private  storage: TokenStorageService,
              private accountService: AccountService) { }

  ngOnInit(): void {
    this.isLoggedIn= this.storage.getStatusLoggedOrLogout();
    this.avatarUrl = this.storage.getUserAvartar();
  }

}
