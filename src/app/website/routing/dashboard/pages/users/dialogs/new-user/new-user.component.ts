import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ValidationService } from 'src/app/website/routing/auth/services';
import { UsersManagmentService } from 'src/app/website/routing/dashboard/pages/users/services';

import { ResponseModel } from 'src/app/website/models'
import { UserRoles } from '../../models';

@Component({
  selector: 'app-dashboard-new-user-dialog',
  templateUrl: 'new-user.component.html',
  styleUrls: [ 'new-user.component.css' ]
})

export class NewUserDialogComponent {
  newUserForm: FormGroup;
  roles: typeof UserRoles = UserRoles;

  constructor(
    public dialogRef: MatDialogRef<NewUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private validation: ValidationService,
    private _snackBar: MatSnackBar,
    private usersManagmentService: UsersManagmentService,
  ) {
    this.newUserForm = new FormGroup({
      "username": new FormControl('', [
        Validators.required, Validators.minLength(5), Validators.maxLength(16),
        Validators.pattern('(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')
      ]),
      "password": new FormControl('', [
        Validators.required, Validators.minLength(8), Validators.maxLength(64),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&=#])[A-Za-z0-9@$!%*?&=#]+$')
      ]),
      "confirmPassword": new FormControl('', [
        Validators.required, Validators.minLength(8), Validators.maxLength(64),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&=#])[A-Za-z0-9@$!%*?&=#]+$')
      ]),
      "email": new FormControl('', [
        Validators.required, Validators.email
      ]),
      "phoneNumber": new FormControl(''),
      "role": new FormControl('', [
        Validators.required
      ])
    }, {
      validators: this.validation.MatchPassword("password", "confirmPassword")
    });
  }

  submit() {
    if(this.newUserForm.valid) {
      /*this.newUserForm.().subscribe(
        (data: ResponseModel) => {

          this._snackBar.open(data.message, 'Ok', {
            duration: 10000,
          });
  
          if(data.statusCode == '200') {
            
          }
        }
      );*/
    }
  }
}