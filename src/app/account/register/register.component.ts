import {Component, OnInit} from "@angular/core";
import {
  AbstractControl, Form,
  FormControl,
  FormGroup,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
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

  registerForm: FormGroup;

  constructor(private accountService: AccountService, private router: Router) {
  }

  ngOnInit() {
    this.userSub = this.accountService.userChanged.subscribe(user => {
      if(user){
        this.router.navigate(['account'])
      }
    })

    this.registerForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'password_confirm': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  checkPasswords(){
    if(this.registerForm.get('password')?.value === this.registerForm.get('password_confirm')?.value && this.registerForm.get('password')?.value.length > 5 && this.registerForm.get('password_confirm')?.value.length > 5){
      this.passwordsValid = true;
    }
    else{
      console.log('passwords invalid');
      this.passwordsValid = false;
    }
  }



  onSubmit(){
    this.accountService.register(this.registerForm.get('name')?.value, this.registerForm.get('email')?.value, this.registerForm.get('password')?.value, this.registerForm.get('password_confirm')?.value);
  }
}
