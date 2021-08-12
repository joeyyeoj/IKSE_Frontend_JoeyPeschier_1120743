import {Component, Input} from "@angular/core";
import {Product} from "../../product.model";

@Component({
  selector: 'app-producten-item',
  templateUrl: './producten-item.component.html',
  styleUrls: ['./producten-item.component.css']
})
export class ProductenItemComponent {
  @Input() product: Product;
  @Input() index: number;
}
