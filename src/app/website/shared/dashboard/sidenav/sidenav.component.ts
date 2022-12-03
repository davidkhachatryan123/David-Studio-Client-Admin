import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { routes } from '../../../consts';

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: [ 'sidenav.component.css' ]
})

export class SidenavComponent implements OnInit {
  routers: typeof routes = routes;
  route: string;

  constructor(
    private router: Router
  ) {
    this.route = router.url;
  }

  ngOnInit() {
    
  }
}