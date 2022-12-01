import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from 'src/app/website/services/auth.service';
import { ValidationService } from 'src/app/website/services/validation.service';

import { SetupUser } from '../../../models/setup-user';
import { ResponseModel } from '../../../models/response';

@Component({
  selector: 'app-startup',
  templateUrl: 'setup.component.html',
  styleUrls: [ 'setup.component.css' ]
})

export class SetupComponent implements OnInit {
  setupForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private validation: ValidationService,
    private _snackBar: MatSnackBar
  ) {
    this.setupForm = new FormGroup({
      "username": new FormControl('', [
        Validators.required, Validators.minLength(5), Validators.maxLength(16),
        Validators.pattern('(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')
      ]),
      "email": new FormControl('', [
        Validators.required, Validators.email
      ]),
      "password": new FormControl('', [
        Validators.required, Validators.minLength(8), Validators.maxLength(64),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&=#])[A-Za-z0-9@$!%*?&=#]+$')
      ]),
      "confirmPassword": new FormControl('', [
        Validators.required, Validators.minLength(8), Validators.maxLength(64),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&=#])[A-Za-z0-9@$!%*?&=#]+$')
      ])
    }, {
      validators: this.validation.MatchPassword("password", "confirmPassword")
    });
  }

  ngOnInit() {
    this.authService.isSetup().subscribe((data: any) => {
      if(data.value == 'false')
        this.router.navigate(['login']);
    });
  }

  submit() {
    if(this.setupForm.valid) {

      this.authService.setup(new SetupUser(
        this.setupForm.controls['username'].value,
        this.setupForm.controls['password'].value,
        this.setupForm.controls['email'].value
      )).subscribe(
        (data: ResponseModel) => {

          this._snackBar.open(data.message, 'Ok', {
            duration: 10000,
          });
  
          if(data.statusCode == '200') {
            this.router.navigate(['login']);
          }
        }
      );
    }
  }
}