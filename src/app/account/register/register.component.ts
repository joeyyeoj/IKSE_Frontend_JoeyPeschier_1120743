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
    },
      this.checkMatchValidator('password', 'password_confirm'))
  }

  checkMatchValidator(field1: string, field2: string) {
    return function (frm: AbstractControl) {
      let field1Value = frm.get(field1)?.value;
      let field2Value = frm.get(field2)?.value;
      if(frm.get(field1)?.hasError('minlength')){
        return null;
      }
      if (field1Value !== '' && field1Value !== field2Value) {
        frm.get(field1)?.setErrors({'pwDontMatch': true})
        frm.get(field2)?.setErrors({'pwDontMatch': true})
        return {'match': `value ${field1Value} is not equal to ${field2Value}`}
      }
      frm.get(field1)?.setErrors(null)
      frm.get(field2)?.setErrors(null)
      return null;
    }
  }



  onSubmit(){
    this.accountService.register(this.registerForm.get('name')?.value, this.registerForm.get('email')?.value, this.registerForm.get('password')?.value, this.registerForm.get('password_confirm')?.value);
  }
}
