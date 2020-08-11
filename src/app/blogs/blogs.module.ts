import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BlogsComponent} from './blogs.component';
import {BrowserModule} from '@angular/platform-browser';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent
  },
  {path:':id/blogDetail',component:BlogDetailComponent}
];

@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogsModule {
}
