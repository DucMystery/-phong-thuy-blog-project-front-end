import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BlogsComponent} from './blogs.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import { HeaderComponent } from '../header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {SideRightComponent} from "../multi/side-right/side-right.component";
import { BlogDeleteComponent } from './blog-delete/blog-delete.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogUserComponent } from './blog-user/blog-user.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BlogErrorComponent } from './blog-error/blog-error.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,children: [
      {path:'list',component: BlogListComponent},
      {path:':id/blogDetail',component:BlogDetailComponent},
      {path: 'create',component: BlogAddComponent},
      {path: ':id/edit',component:BlogEditComponent},
      {path: ':id/list',component: BlogUserComponent},
      {path: 'error',component: BlogErrorComponent}
    ]
  },
];

@NgModule({
  declarations: [
    BlogsComponent,
    SideRightComponent,
    BlogDetailComponent,
    BlogAddComponent,
    BlogEditComponent,
    BlogDeleteComponent,
    BlogListComponent,
    BlogUserComponent,
    BlogErrorComponent
  ],
  exports: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule,
    NgxPaginationModule
  ]
})
export class BlogsModule {
}
