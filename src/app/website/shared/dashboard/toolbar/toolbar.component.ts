import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/website/routing/auth/services';

import { routes } from '../../../consts';

@Component({
  selector: 'app-dashboard-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: [ 'toolbar.component.css' ]
})

export class ToolBarComponent implements OnInit {
  @Input() isMenuOpened: boolean = true;
  @Output() isShowSidebar = new EventEmitter<boolean>();

  private routers: typeof routes = routes;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }
}