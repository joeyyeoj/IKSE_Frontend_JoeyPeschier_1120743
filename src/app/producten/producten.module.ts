import {NgModule} from "@angular/core";
import {ProductenComponent} from "./producten.component";
import {ProductenItemComponent} from "./producten-lijst/producten-item/producten-item.component";
import {ProductenLijstComponent} from "./producten-lijst/producten-lijst.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {ProductenDetailComponent} from "./producten-detail/producten-detail.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CrudComponent} from "./admin/CRUD/crud.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ProductenComponent,
    ProductenItemComponent,
    ProductenLijstComponent,
    ProductenDetailComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductenModule {

}
