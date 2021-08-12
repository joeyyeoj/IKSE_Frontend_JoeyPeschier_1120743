import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {ActivatedRoute, ActivatedRouteSnapshot, RouterModule} from "@angular/router";
import {ProductenModule} from "./producten/producten.module";
import {CommonModule} from "@angular/common";
import {ProductenService} from "./producten/producten.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ProductenModule
  ],
  providers: [ProductenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
