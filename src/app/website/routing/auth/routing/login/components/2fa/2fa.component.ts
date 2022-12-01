import { Component, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../../services/auth.service';
import { TwoFA } from '../../../../models/2fa';
import { ResponseModel } from '../../../../models/response';

@Component({
  selector: 'login-2fa',
  templateUrl: '2fa.component.html',
  styleUrls: [ '2fa.component.css' ]
})
export class TwoFAComponent {
  @Output() twoFAForm: FormGroup;

  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar
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
            console.log('2FA OK');
          }
        }
      );
    }
  }
}