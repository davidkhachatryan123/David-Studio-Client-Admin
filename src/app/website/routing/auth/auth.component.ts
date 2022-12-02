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
    if(this.authService.isLoggedIn())
      this.router.navigate(['dashboard']);
    else {

      this.authService.isSetup().subscribe((data: any) => {
        if(data.value == 'true')
          this.router.navigate(['auth', 'setup']);
        else
        this.router.navigate(['auth', 'login']);
      });
    }
  }
}