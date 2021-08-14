import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router} from "@angular/router";
import {Product} from "../product.model";
import {ProductenService} from "../producten.service";
import {Subscription} from "rxjs";
import {AccountService} from "../../account/account.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './producten-detail.component.html',
  styleUrls: ['./producten-detail.component.css']
})
export class ProductenDetailComponent implements OnInit, OnDestroy{
  id: number;
  private sub: any;
  adminstatus = false;
  product: Product;
  productSub: Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductenService, private accountService: AccountService, private router: Router) {


  }

  ngOnInit() {
    this.productService.getProducts();
    this.productSub = this.productService.productsChanged.subscribe(products => {
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
        this.product = this.productService.getProduct(this.id)!;
      })
    })
    this.adminstatus = this.accountService.getAdminStatus();
  }

  onEdit(){
    this.productService.editProduct(this.product);
    this.router.navigate(['producten/create'])
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.product = null!;
  }
}
