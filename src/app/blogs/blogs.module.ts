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

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent
  },
  {path:':id/blogDetail',component:BlogDetailComponent},
  {path: 'create',component: BlogAddComponent},
  {path: ':id/edit',component:BlogEditComponent}
];

@NgModule({
  declarations: [
    BlogsComponent,
    SideRightComponent
   ,BlogDetailComponent, BlogAddComponent, BlogEditComponent
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
  ]
})
export class BlogsModule {
}
