import { Component, ViewChild, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: [ 'login.component.css' ]
})
export class LoginComponent {
  @ViewChild('stepper') private stepper: MatStepper;

  next() {
    this.stepper.next();
  }
}