import {Component, OnInit} from "@angular/core";
import {AccountService} from "./account.service";
import {User} from "./user.model";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})

export class AccountComponent implements OnInit{
  user: User;

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.user = this.accountService.user
  }


}
