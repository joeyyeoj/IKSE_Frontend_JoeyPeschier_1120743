import {Component, OnDestroy, OnInit} from "@angular/core";
import {ProductenService} from "../../producten.service";
import {AccountService} from "../../../account/account.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Product} from "../../product.model";

@Component({
  selector: 'app-productcrud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit, OnDestroy{
  productForm: FormGroup;
  productToBeEditedSub = new Subscription();
  editThisProduct: Product;
  existingProduct = false;


  constructor(private productservice: ProductenService, private accountservice: AccountService) {
  }

  ngOnInit() {
    this.editThisProduct = this.productservice.productToBeEdited!;
    this.initForm();
  }

  ngOnDestroy() {
    this.editThisProduct = null!;
    this.existingProduct = false;
    this.productservice.productToBeEdited = null!;

  }

  doUpdateOrCreate(){
    if(this.editThisProduct != null){
      //update code
    }
    else{
      let newProduct = new Product(0, this.productForm.get('brand')?.value, this.productForm.get('name')?.value, this.productForm.get('price')?.value, this.productForm.get('description')?.value, this.productForm.get('imagePath')?.value);
      this.productservice.storeNewProduct(newProduct).subscribe(response => {
        console.log(response);
      });
    }
  }

  deleteProduct(){
    //extra check maar zou altijd waar moeten zijn owo
    if(this.accountservice.isAdmin){

    }
  }


  private initForm(){
    let productImage = '';
    let productBrand = '';
    let productName = '';
    let productPrice = 0;
    let productDescription = '';
    console.log(this.editThisProduct);

    if(this.editThisProduct != null){
      console.log("test")
      productImage = this.editThisProduct.imagePath;
      productBrand = this.editThisProduct.brand;
      productName = this.editThisProduct.name;
      productPrice = this.editThisProduct.price;
      productDescription = this.editThisProduct.description;
      this.existingProduct = true;
    }

    this.productForm = new FormGroup({
      'imagePath': new FormControl(productImage, Validators.required),
      'brand': new FormControl(productBrand, Validators.required),
      'name': new FormControl(productName, Validators.required),
      'price': new FormControl(productPrice, [Validators.required, Validators.min(0)]),
      'description': new FormControl(productDescription, Validators.required)
    })
  }
}
