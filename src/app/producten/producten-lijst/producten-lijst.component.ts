import {Component, OnDestroy, OnInit} from "@angular/core";
import {Product} from "../product.model";
import {ProductenService} from "../producten.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './producten-lijst.component.html',
})
export class ProductenLijstComponent implements OnInit, OnDestroy {
  producten: Product[] = [];
  productSub = new Subscription();


  constructor(private productService: ProductenService) {


  }

  ngOnInit(){
    if(this.producten.length === 0){
      this.productService.getProducts();
    }

    this.productSub = this.productService.productsChanged.subscribe(producten => {
      this.producten = producten;
    })
  }

  ngOnDestroy() {
    this.productSub.unsubscribe();
  }
}
