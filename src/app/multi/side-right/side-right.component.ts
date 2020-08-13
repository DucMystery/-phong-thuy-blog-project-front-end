import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/tokenStorage.service";

@Component({
  selector: 'app-side-right',
  templateUrl: './side-right.component.html',
  styleUrls: ['./side-right.component.css']
})
export class SideRightComponent implements OnInit {
  isLoggedIn: boolean;
  avatarUrl: string;
  constructor(private  storage: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn= this.storage.getStatusLoggedOrLogout();
    this.avatarUrl = this.storage.getUserAvartar();
  }

}
