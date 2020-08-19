import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountEditComponent } from './account-edit/account-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {RouterModule, Routes} from '@angular/router';
import {BlogsComponent} from '../blogs/blogs.component';
import {BlogListComponent} from '../blogs/blog-list/blog-list.component';
import {BlogDetailComponent} from '../blogs/blog-detail/blog-detail.component';
import {BlogAddComponent} from '../blogs/blog-add/blog-add.component';
import {BlogEditComponent} from '../blogs/blog-edit/blog-edit.component';
import {AuthGuard} from '../_interceptor/auth.guard';
import {BlogUserComponent} from '../blogs/blog-user/blog-user.component';
import {BlogErrorComponent} from '../blogs/blog-error/blog-error.component';
import {BlogsCategoryComponent} from '../blogs/blogs-category/blogs-category.component';

const routes: Routes = [
  {path: 'edit',component:AccountEditComponent}
];

@NgModule({
  declarations: [AccountEditComponent],
  exports: [
    AccountEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule, ReactiveFormsModule, RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountModule { }
