import {Injectable, OnInit} from "@angular/core";
import {Product} from "./product.model";


@Injectable()
export class ProductenService{

  producten: Product[] = [];
  constructor() {
  }

  getProducts(){
    let product1 = new Product(1, 'Acer', 'swift 1 sf114-34-c1px 14 inch full hd laptop', 69, 'Geniet van je favoriete films en series, speur het internet af of werk in verschillende basisprogramma’s met deze Acer Swift 1 SF114-34-C1PX laptop. Met een werkgeheugen van 4 GB RAM en 128 GB eMMC opslagruimte heb je voldoende ruimte voor het installeren van software en het opslaan van documenten, foto’s en video’s. Het 14-inch Full HD beeldscherm beschikt over levendige kleuren, een resolutie van 1920 bij 1080 megapixels en screen-to-body ratio van 84% voor een optimale gebruikerservaring. Dankzij Acer ExaColor en BluelightShield worden je ogen minder snel moe en lijken de kleuren nog helderder.', 'https://designshack.net/wp-content/uploads/placeholder-image.png')
    let product2 = new Product(2, 'HP','Product Twee', 69, 'Tweede Product', 'https://designshack.net/wp-content/uploads/placeholder-image.png')
    let product3 = new Product(3, 'Samsung','Product Drie', 69, 'Derde Product', 'https://designshack.net/wp-content/uploads/placeholder-image.png')
    let product4 = new Product(4, 'Lenovo','Product Vier', 69, 'Vierde Product', 'https://designshack.net/wp-content/uploads/placeholder-image.png')


    if(this.producten.length === 0){
      this.producten.push(product1);
      this.producten.push(product2);
      this.producten.push(product3);
      this.producten.push(product4);
    }

    return this.producten.slice();
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
