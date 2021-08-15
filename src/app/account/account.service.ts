import {Injectable} from "@angular/core";
import {User} from "./user.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Subject, throwError} from "rxjs";
import {catchError} from "rxjs/operators";


export interface AuthResponseData {
  user: { name: string, email: string, admin: boolean },
  token: string,
  expiresIn: number
}

@Injectable({providedIn: 'root'})
export class AccountService {
  user: User;
  userChanged = new Subject<User>();
  isAuthenticated = false;
  isAdmin = false;
  errorMessage = new Subject<string>();

  constructor(private http: HttpClient) {
  }


  login(email: string, password: string){
    this.http.post<AuthResponseData>('http://localhost:8000/api/auth/login', {
      email: email,
      password: password
    }).subscribe(response => {
      this.handleAuthentication(response.user.name, response.user.email, response.user.admin, response.token, response.expiresIn);
    },
      error => {
      this.handleError(error)
      })
  }

  handleError(error: HttpErrorResponse){
    let errorMsg = 'Onbekende error, sorry =('
    if(error){
      switch(error.statusText){
        case "Unauthorized":
          errorMsg = 'Verkeerd wachtwoord of email-adres'
          break;
        case "Bad Request":
          errorMsg = 'Email-adres al in gebruik of ontbrekende gegevens'
      }
    }
    this.errorMessage.next(errorMsg);
  }

  register(name: string, email:string, password: string, password_confirm: string){
    this.http.post<AuthResponseData>('http://localhost:8000/api/auth/register', {
      "name": name,
      "email": email,
      "password": password,
      "password_confirmation": password_confirm
    }).subscribe(response => {
      this.handleAuthentication(response.user.name, response.user.email, response.user.admin, response.token, response.expiresIn)
    }, error => {
      this.handleError(error)
    })
  }


  handleAuthentication(name: string, email:string, admin: boolean, token: string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    this.user = new User(name, email, token, expirationDate, admin);
    this.userChanged.next(this.user);
    this.isAuthenticated = true;
    this.isAdmin = this.user.admin;
  }


  getAuthentication(){
    return this.isAuthenticated;
  }

  getAdminStatus(){
    return this.isAdmin;
  }
}
