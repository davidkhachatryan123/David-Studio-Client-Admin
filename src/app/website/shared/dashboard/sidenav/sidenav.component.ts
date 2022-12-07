import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/website/routing/auth/services';
import { AppUser } from 'src/app/website/routing/auth/models';

import { routes } from '../../../consts';
import { roles } from 'src/app/website/routing/auth/models';

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: [ 'sidenav.component.css' ]
})

export class SidenavComponent implements OnInit {
  routers: typeof routes = routes;
  route: string;

  appUser: AppUser = new AppUser('', '', '', '');
  roles: typeof roles = roles;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.route = router.url;
  }

  ngOnInit() {
    this.authService.getUser().subscribe(data => this.appUser = data);
  }
}