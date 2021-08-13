import {Component, OnInit} from '@angular/core';
import {ProductenService} from "./producten/producten.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'IKSE-Frontend-JoeyPeschier-s1120743';

  constructor(private productService: ProductenService) {
  }

  ngOnInit() {
    console.log("Up and running")
    this.productService.getProducts();
  }
}
