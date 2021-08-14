import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {Product} from "./product.model";
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from "@angular/common/http";
import {Subject} from "rxjs";
import {AccountService} from "../account/account.service";


@Injectable({providedIn: 'root'})
export class ProductenService implements OnDestroy{
  selectedProduct: Product;

  producten: Product[] = [];
  productsChanged = new Subject<Product[]>();
  productToBeEdited: Product | null;

  constructor(private http: HttpClient, private accountservice: AccountService) {
  }

  getProducts(){
    this.fetchProducts().subscribe(products => {
      if(this.producten !== products){
        this.producten = products
        this.productsChanged.next(this.producten.slice());
      }
      else{
        this.productsChanged.next(this.producten.slice());
      }

    })
  }

  ngOnDestroy() {
    this.productToBeEdited = null;
  }

  editProduct(product: Product){
    this.productToBeEdited = product;
  }

  storeNewProduct(product: Product){
    return this.http.post('http://127.0.0.1:8000/api/product/create', {
      'brand': product.brand,
      'name': product.name,
      'price': product.price,
      'imagePath': product.imagePath,
      'description': product.description
    },
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.accountservice.user.token
        })
      })
  }

  fetchProducts(){
    return this.http.get<Product[]>('http://127.0.0.1:8000/api/products');
  }

  getProduct(gezochteItemId: number){
    return this.producten.find((product) => {
      if(product.id == gezochteItemId){
        return true
      }
      return false
    })
  }
}
