import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductenComponent} from "./producten/producten.component";
import {AccountComponent} from "./account/account.component";
import {ProductenDetailComponent} from "./producten/producten-detail/producten-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/producten', pathMatch: 'full' },
  { path: 'producten',  component: ProductenComponent },
  { path: 'producten/:id', component: ProductenDetailComponent},
  { path: 'account', component: AccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
