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

import { LoginComponent } from './components/login.component';

@NgModule({
  imports: [ RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: LoginComponent
    }
  ]),
  FormsModule, ReactiveFormsModule,
  MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule ],
  declarations: [ LoginComponent ],
  providers: [ ]
})
export class LoginModule { }