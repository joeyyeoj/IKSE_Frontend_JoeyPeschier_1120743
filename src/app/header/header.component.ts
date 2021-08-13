import {Component, OnInit} from "@angular/core";
import {AccountService} from "../account/account.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})


export class HeaderComponent{
  isCollapsed = false;
  authenticated = this.accountservice.isAuthenticated;


  constructor(private accountservice: AccountService) {
  }



  openHamburger(){
    this.isCollapsed = !this.isCollapsed
  }
}


