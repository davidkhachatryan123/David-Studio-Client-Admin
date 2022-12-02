import { Component, ViewChild, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: [ 'login.component.css' ]
})
export class LoginComponent implements OnInit {
  @ViewChild('stepper') private stepper: MatStepper;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.isSetup().subscribe((data: any) => {
      if(data.value == 'true')
        this.router.navigate(['auth', 'setup']);
    });
  }

  next() {
    this.stepper.next();
  }
}