import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AccountService} from "../account.service";
import {Subscription} from "rxjs";
import {User} from "../user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../account.component.css']
})

export class LoginComponent implements OnInit{
  userSub = new Subscription;
  errorSub = new Subscription;
  errorMsg: string;

  constructor(private accountService: AccountService, private router: Router) {
  }



  ngOnInit() {
    this.userSub = this.accountService.userChanged.subscribe(user => {
      if(user){
        this.router.navigate(['account']);
      }
    })

    this.errorSub = this.accountService.errorMessage.subscribe(error => {
      this.errorMsg = error;
    })
  }

  onSubmit(form: NgForm){
    this.accountService.login(form.value.email, form.value.password);
  }

}
