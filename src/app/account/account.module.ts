import {NgModule} from "@angular/core";
import {AccountComponent} from "./account.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AccountComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AccountModule {

}
