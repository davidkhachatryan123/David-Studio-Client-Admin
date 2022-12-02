import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseModel } from './models/response';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: [ 'auth.component.css' ]
})

export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.isSetup().subscribe((data: boolean) => {
      if(data)
        this.router.navigate(['auth', 'setup']);
      else
      this.router.navigate(['auth', 'login']);
    });

    this.authService.isLoggedIn().subscribe((data: boolean) => {
      if(data) {
        this.router.navigate(['dashboard']);
      }
    });
  }
}