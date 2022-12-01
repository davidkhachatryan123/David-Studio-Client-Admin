import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';

import { LoginComponent } from './login.component';
import { UserComponent } from './components/user/user.component';
import { TwoFAComponent } from './components/2fa/2fa.component';

@NgModule({
  imports: [ RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: LoginComponent
    }
  ]),
  FormsModule, ReactiveFormsModule,
  MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule, MatStepperModule ],
  declarations: [ LoginComponent, UserComponent, TwoFAComponent ],
  providers: [ ]
})
export class LoginModule { }