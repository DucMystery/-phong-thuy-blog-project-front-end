import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegitrationComponent} from "./registration/regitration.component";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {AppComponent} from "../app.component";
import {environment} from "../../environments/environment";

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'register',component:RegitrationComponent}


];

@NgModule({
  declarations: [LoginComponent, RegitrationComponent],
  imports: [CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes), FormsModule

  ],
  providers: [],
})
export class AuthRoutingModule {

}
