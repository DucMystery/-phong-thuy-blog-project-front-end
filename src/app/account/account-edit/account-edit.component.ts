import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

  selectedImage: any = null;
  url: string;
  imgSrc: any;
  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }
  submit() {
    if (this.selectedImage !== null) {
      const fieldPath = `${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(fieldPath);
      this.storage.upload(fieldPath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.url = url;
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
      this.submit();
    } else {
      this.imgSrc = '../../../assets/static/images/avatar_account_default.jpg';
      this.selectedImage = null;
    }
  }

}
