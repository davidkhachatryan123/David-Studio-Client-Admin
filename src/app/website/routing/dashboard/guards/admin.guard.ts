import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';

import { AuthService } from 'src/app/website/routing/auth/services';
import { roles } from 'src/app/website/routing/auth/models';

import { routes } from 'src/app/website/consts';

@Injectable()
export class AdminGuard implements CanActivate {
  private routers: typeof routes = routes;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getUser().pipe(
      map((data: any) => {
        if(data.role != roles.admin) return false;

        return true;
      }
    ));
  }
}