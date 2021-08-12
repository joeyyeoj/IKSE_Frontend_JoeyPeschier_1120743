import {NgModule} from "@angular/core";
import {ProductenComponent} from "./producten.component";
import {ProductenItemComponent} from "./producten-lijst/producten-item/producten-item.component";
import {ProductenLijstComponent} from "./producten-lijst/producten-lijst.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {ProductenDetailComponent} from "./producten-detail/producten-detail.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ProductenComponent,
    ProductenItemComponent,
    ProductenLijstComponent,
    ProductenDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ]
})
export class ProductenModule {

}
