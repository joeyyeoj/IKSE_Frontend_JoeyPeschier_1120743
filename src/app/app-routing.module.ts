import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductenComponent} from "./producten/producten.component";
import {AccountComponent} from "./account/account.component";
import {ProductenDetailComponent} from "./producten/producten-detail/producten-detail.component";
import {LoginComponent} from "./account/login/login.component";
import {AccountGuard} from "./account/account.guard";
import {RegisterComponent} from "./account/register/register.component";

const routes: Routes = [
  { path: '', redirectTo: '/producten', pathMatch: 'full' },
  { path: 'producten',  component: ProductenComponent },
  { path: 'producten/:id', component: ProductenDetailComponent},
  { path: 'account', canActivate: [AccountGuard], component: AccountComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
