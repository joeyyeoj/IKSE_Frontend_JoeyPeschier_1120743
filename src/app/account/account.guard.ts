import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AccountService} from "./account.service";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AccountGuard implements CanActivate{
  constructor(private accuntService: AccountService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.accuntService.isAuthenticated){
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}
