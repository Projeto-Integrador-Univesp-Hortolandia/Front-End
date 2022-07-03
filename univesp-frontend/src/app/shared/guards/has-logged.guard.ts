import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HasLoggedGuard implements CanLoad {

  constructor(private loginService: LoginService, public router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.loginService.isLogged()){
        this.router.navigateByUrl('home/noticias')

        return false;
      }

    return true;
  }
}
