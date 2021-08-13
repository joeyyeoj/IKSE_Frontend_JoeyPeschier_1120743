import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, Params} from "@angular/router";
import {Product} from "../product.model";
import {ProductenService} from "../producten.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './producten-detail.component.html',
  styleUrls: ['./producten-detail.component.css']
})
export class ProductenDetailComponent implements OnInit, OnDestroy{
  id: number;
  private sub: any;
  product: Product;
  productSub: Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductenService) {


  }

  ngOnInit() {
    this.productService.getProducts();
    this.productSub = this.productService.productsChanged.subscribe(products => {
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
        this.product = this.productService.getProduct(this.id)!;
      })
    })




  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
