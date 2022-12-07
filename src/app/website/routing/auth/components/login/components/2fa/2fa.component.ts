import { Component, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../../../services/auth.service';
import { ResponseModel } from 'src/app/website/models';
import { TwoFA } from '../../../../models';
import { routes } from 'src/app/website/consts';

@Component({
  selector: 'login-2fa',
  templateUrl: '2fa.component.html',
  styleUrls: [ '2fa.component.css' ]
})
export class TwoFAComponent {
  @Output() twoFAForm: FormGroup;

  private routers: typeof routes = routes;

  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
    ) {
    this.twoFAForm = new FormGroup({
        "token": new FormControl('', [
          Validators.required, Validators.minLength(6), Validators.maxLength(6),
          Validators.pattern('[0-9]+$')
        ])
    });
  }

  submit(){
    if(this.twoFAForm.valid) {

      this.authService.twoFA(new TwoFA(
        this.twoFAForm.controls['token'].value,
      )).subscribe(
        (data: ResponseModel) => {

          this._snackBar.open(data.message, 'Ok', {
            duration: 10000,
          });
  
          if(data.statusCode == '200') {
            this.router.navigate([this.routers.DASHBOARD]);
          }
        }
      );
    }
  }
}