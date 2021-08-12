import {Component} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})


export class HeaderComponent {
  isCollapsed = false;




  openHamburger(){
    this.isCollapsed = !this.isCollapsed
  }
}


