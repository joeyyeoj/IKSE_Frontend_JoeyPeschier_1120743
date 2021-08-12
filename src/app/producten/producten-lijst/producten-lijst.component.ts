import {Component, OnInit} from "@angular/core";
import {Product} from "../product.model";
import {ProductenService} from "../producten.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './producten-lijst.component.html',
})
export class ProductenLijstComponent implements OnInit {
  producten: Product[] = [];


  constructor(private productService: ProductenService) {


  }

  ngOnInit(){
    this.producten = this.productService.getProducts();
    console.log(this.producten)
  }
}
