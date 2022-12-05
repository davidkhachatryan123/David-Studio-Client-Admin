import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ValidationService } from 'src/app/website/routing/auth/services';
import { UsersManagmentService } from 'src/app/website/routing/dashboard/pages/users/services';

import { ResponseModel } from 'src/app/website/models'
import { NewUser, UserRoles } from '../../models';

@Component({
  selector: 'app-dashboard-new-user-dialog',
  templateUrl: 'new-user.component.html',
  styleUrls: [ 'new-user.component.css' ]
})

export class NewUserDialogComponent {
  newUserForm: FormGroup;
  roles: typeof UserRoles = UserRoles;

  @Output() onSubmit = new EventEmitter<NewUser>();

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

  onSubmitEvent() {
    if(this.newUserForm.valid) {
      this.onSubmit.emit(new NewUser(
        '',
        this.newUserForm.controls['username'].value,
        this.newUserForm.controls['password'].value,
        this.newUserForm.controls['email'].value,
        this.newUserForm.controls['phoneNumber'].value,
        this.newUserForm.controls['role'].value
      ));
    }
  }
}