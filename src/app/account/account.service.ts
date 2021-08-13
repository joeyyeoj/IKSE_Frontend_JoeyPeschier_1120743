import {Injectable} from "@angular/core";
import {User} from "./user.model";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";


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

  constructor(private http: HttpClient) {
  }


  login(email: string, password: string){
    this.http.post<AuthResponseData>('http://localhost:8000/api/auth/login', {
      email: email,
      password: password
    }).subscribe(response => {
      this.handleAuthentication(response.user.name, response.user.email, response.user.admin, response.token, response.expiresIn);
    })
  }


  handleAuthentication(name: string, email:string, admin: boolean, token: string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    this.user = new User(name, email, token, expirationDate, true);
    this.userChanged.next(this.user);
    this.isAuthenticated = true;
    this.isAdmin = this.user.admin;
  }

  getAuthentication(){
    return this.isAuthenticated;
  }
}
