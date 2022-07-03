import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable({
  providedIn: 'root'
})

export class HasAuthGuardChild implements CanActivateChild {

  constructor(private loginService: LoginService, public router: Router) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      alert(this.loginService.isLogged())

      if(this.loginService.isLogged()){
        return false;
      }

    return true;
  }

}

@Injectable({
  providedIn: 'root',
})

export class HasAuthGuard implements CanLoad {

  constructor(private loginService: LoginService, public router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.loginService.isLogged()){

        return true;
      }

      this.router.navigateByUrl('login')
    return false;
  }
}
