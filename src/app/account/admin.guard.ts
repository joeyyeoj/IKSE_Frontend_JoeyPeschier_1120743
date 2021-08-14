import {Injectable} from "@angular/core";
import {AccountService} from "./account.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate{
  constructor(private accountservice: AccountService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.accountservice.user != null && this.accountservice.isAdmin){
      return true;
    }
    return this.router.createUrlTree(['producten'])
  }
}
