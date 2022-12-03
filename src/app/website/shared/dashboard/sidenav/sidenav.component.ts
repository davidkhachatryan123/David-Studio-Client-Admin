import { Component, OnInit } from '@angular/core';

import { routes } from '../../../consts';

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: [ 'sidenav.component.css' ]
})

export class SidenavComponent implements OnInit {
  routers: typeof routes = routes;

  constructor() { }

  ngOnInit() { }
}