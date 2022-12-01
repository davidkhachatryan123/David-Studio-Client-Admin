import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';
import { ResponseModel } from '../../../models/response';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: [ 'login.component.css' ]
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
    ) {
    this.loginForm = new FormGroup({
        "username": new FormControl('', [
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
    this.authService.isSetup().subscribe((data: any) => {
      if(data.value == 'true')
        this.router.navigate(['auth', 'setup']);
    });
  }

  submit(){
    if(this.loginForm.valid) {

      this.authService.login(new User(
        this.loginForm.controls['username'].value,
        this.loginForm.controls['password'].value
      )).subscribe(
        (data: ResponseModel) => {

          this._snackBar.open(data.message, 'Ok', {
            duration: 10000,
          });
  
          if(data.statusCode == '200') {
            console.log('2FA');
          }
        }
      );
    }
  }
}