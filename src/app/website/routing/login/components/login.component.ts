import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: [ 'login.component.css' ]
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router
    ) {
    this.loginForm = new FormGroup({
        "login": new FormControl('', [
          Validators.required, Validators.minLength(5), Validators.maxLength(16),
          Validators.pattern('(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')
        ]),
        "password": new FormControl('', [
          Validators.required, Validators.minLength(8), Validators.maxLength(64),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&=#])[A-Za-z0-9@$!%*?&=#]+$')
        ])
    });
  }
  
  ngOnInit() {
    this.loginService.isSetup().subscribe((data: any) => {
      if(data.value == 'true')
        this.router.navigate(['setup']);
    });
  }

  submit(){
    console.log(this.loginForm);
  }
}