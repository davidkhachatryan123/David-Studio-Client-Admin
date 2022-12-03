import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

import { AuthService } from '../services';
import { routes } from '../../../consts';

@Injectable()
export class SetupGuard implements CanActivate {
  private routers: typeof routes = routes;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isSetup().pipe(
      map((data: boolean) => {
        if(!data) this.router.navigate([this.routers.LOGIN]);

        return data;
      }
    ));
  }
}