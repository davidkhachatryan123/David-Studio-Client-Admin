import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/website/routing/auth/models';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/website/routing/auth/services';
import { routes } from '../../../../consts';

@Component({
  selector: 'app-dashboard-toolbar-user',
  templateUrl: 'user.component.html',
  styleUrls: [ 'user.component.css' ]
})

export class UserComponent implements OnInit {
  public routers: typeof routes = routes;
  public user: AppUser | undefined = new AppUser('', '', '', '');

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getUser().subscribe(data => this.user = data);
  }

  signOut() {
    this.authService.signOut().subscribe();
    this.router.navigate([this.routers.LOGIN]);
  }
}