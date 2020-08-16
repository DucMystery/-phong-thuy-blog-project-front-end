import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegitrationComponent} from "./registration/regitration.component";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'register',component:RegitrationComponent},
  {path: 'logout', component: LogoutComponent}

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
