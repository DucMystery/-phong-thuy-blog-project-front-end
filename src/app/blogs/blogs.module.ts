import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {BlogsComponent} from './blogs.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import { HeaderComponent } from '../header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import { BlogDeleteComponent } from './blog-delete/blog-delete.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogUserComponent } from './blog-user/blog-user.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BlogErrorComponent } from './blog-error/blog-error.component';
import {AuthGuard} from '../_interceptor/auth.guard';
import {BlogsCategoryComponent} from './blogs-category/blogs-category.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,children: [
      {path:'list',component: BlogListComponent},
      {path:':id/blogDetail',component:BlogDetailComponent},
      {path: 'create',component: BlogAddComponent},
      {path: ':id/edit',component:BlogEditComponent,canActivate:[AuthGuard]},
      {path: ':id/list',component: BlogUserComponent,canActivate:[AuthGuard]},
      {path: 'error',component: BlogErrorComponent},
      {path:':id/listOfCategory',component:BlogsCategoryComponent,canActivate:[AuthGuard]}
    ]
  },
];

// @ts-ignore
@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailComponent,
    BlogAddComponent,
    BlogEditComponent,
    BlogDeleteComponent,
    BlogListComponent,
    BlogUserComponent,
    BlogErrorComponent,
    BlogsCategoryComponent
  ],
  exports: [
    BlogsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule,
    NgxPaginationModule,
  ]
})
export class BlogsModule {
}
