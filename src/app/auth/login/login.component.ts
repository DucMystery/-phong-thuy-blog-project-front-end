import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/tokenStorage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup} from '@angular/forms';
import {AccountService} from "../../services/account.service";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  avatarUrl: string;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMess = '';
  roles: string[] = [];
  account: IUser;
  myGroup: FormGroup;

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private accountService: AccountService
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit() {

    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        console.log(data.accessToken);
        this.tokenStorage.saveAccountId(data.id);
        console.log(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/blogs/list']);
        this.tokenStorage.saveStatusWhenUserLogged('logged');
        this.accountService.findAccountById(data.id).subscribe(dataAccount => {
          this.tokenStorage.saveUserAvatar(dataAccount.avatar);
          this.roles = dataAccount.roles;
        })
      },
      err => {
        this.errorMess = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

}
