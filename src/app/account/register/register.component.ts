import {Component, OnInit} from "@angular/core";
import {FormControl, NgForm, ValidatorFn} from "@angular/forms";
import {AccountService} from "../account.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../account.component.css']
})



export class RegisterComponent implements OnInit{
  passwordsValid = false;
  userSub = new Subscription;

  constructor(private accountService: AccountService, private router: Router) {
  }

  ngOnInit() {
    this.userSub = this.accountService.userChanged.subscribe(user => {
      if(user){
        this.router.navigate(['account'])
      }
    })
  }

  matchingPasswords(form: NgForm){
    if(form.value.password === form.value.password_confirm && form.value.password != '' && form.value.password_confirm != ''){
      this.passwordsValid = true;
    }
    else{
      this.passwordsValid = false;
    }
  }


  onSubmit(form: NgForm){
    this.accountService.register(form.value.name, form.value.email, form.value.password, form.value.password_confirm);
  }
}
