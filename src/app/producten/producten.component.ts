import {Component, OnInit} from "@angular/core";
import {AccountService} from "../account/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-producten',
  templateUrl: './producten.component.html',
  styleUrls: ['./producten.component.css']
})

export class ProductenComponent implements OnInit{
  isAdmin = false;


  constructor(private accountService: AccountService, private router: Router) {
  }

  ngOnInit() {
    this.isAdmin = this.accountService.isAdmin;
  }

  onAddProduct(){
    this.router.navigate(['producten/create']);
  }
}
