import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {Product} from "./product.model";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Subject} from "rxjs";


@Injectable({providedIn: 'root'})
export class ProductenService {

  producten: Product[] = [];
  productsChanged = new Subject<Product[]>();
  constructor(private http: HttpClient) {
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
