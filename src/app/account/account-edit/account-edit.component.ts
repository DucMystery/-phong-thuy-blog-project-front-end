import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";
import {AccountService} from "../../services/account.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../../services/tokenStorage.service";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  editAccount : FormGroup;
  message: string;
  imageName: any;
  selectedImage: any = null;
  imgSrc: any;
  id: number;
  account: IUser;
  constructor(
    private storage: AngularFireStorage,
    private fb : FormBuilder,
    private  accountService: AccountService,
    private tokenStorageService: TokenStorageService
    ) {

  }

  async ngOnInit() {
    this.account = await this.getAccount();
    this.editAccount = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      phoneNumber: [''],
      nickName: [''],
      email: [''],
      password: [''],
      avatar: ['']
    });
    this.imgSrc = this.account.avatar;
    this.editAccount.patchValue(this.account);
    // this.getAccount();


  }

  submitEditAccount(id, account: any){
  this.accountService.editAccount(id, account).subscribe();
  }

  EditAvatar(event:any){
    // this.submit();
    this.showPreview(event)
  }
  //Tim kiem Account the id da luu trong sessionStorage
  getAccount(): any {
    this.id = +this.tokenStorageService.getAccountId();
    return this.accountService.findAccountById(this.id).toPromise();
  }
  // =======================================================Day la code cua phan edit avarta
  submit() {
    if (this.selectedImage !== null) {
      const fieldPath = `${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(fieldPath);
      this.storage.upload(fieldPath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.editAccount.value.avatar = url;
            this.submitEditAccount(this.id, this.editAccount.value);
          console.log(url)
          });
        })
      ).subscribe();
    }
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e => this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      // this.submit();
    } else {
      this.imgSrc = '../../../assets/static/images/avatar_account_default.jpg';
      this.selectedImage = null;
    }
  }
  //=============================================avatar edit xong


}
