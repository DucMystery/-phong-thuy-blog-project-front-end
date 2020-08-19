import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountEditComponent } from './account-edit/account-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [AccountEditComponent],
  exports: [
    AccountEditComponent
  ],
    imports: [
        CommonModule,
        FormsModule, AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireDatabaseModule, ReactiveFormsModule
    ]
})
export class AccountModule { }
