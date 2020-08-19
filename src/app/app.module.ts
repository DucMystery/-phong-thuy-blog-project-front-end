import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {authInterceptorProviders, AuthIntorceptor} from './_interceptor/auth.intorceptor';
import {APP_BASE_HREF, CommonModule} from "@angular/common";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BlogsModule} from './blogs/blogs.module';
import {AccountModule} from "./account/account.module";
import { LogoutComponent } from './auth/logout/logout.component';
import {HeaderComponent} from './header/header.component';
import { LayoutTemplatesFullComponent } from './layout-templates-full/layout-templates-full.component';
// import {AngularEditorModule} from '@kolkov/angular-editor';
import {AlbumModule} from "./album/album.module";




@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    HeaderComponent,
    LayoutTemplatesFullComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule, FormsModule, ReactiveFormsModule, BlogsModule
  ],
  providers: [authInterceptorProviders,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: HTTP_INTERCEPTORS, useClass: AuthIntorceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
