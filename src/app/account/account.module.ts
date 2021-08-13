import {NgModule} from "@angular/core";
import {AccountComponent} from "./account.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule {

}
