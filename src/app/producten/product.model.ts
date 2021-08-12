export class Product {
  public id: number;
  public name: string;
  public brand: string;
  public price: number;
  public description: string;
  public imagePath: string;

  constructor(id: number, brand: string, name: string, price: number, desc: string, imagePath: string) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.description = desc;
    this.imagePath = imagePath;
  }

}
