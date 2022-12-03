import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { SetupComponent, LoginComponent, UserComponent, TwoFAComponent } from './components';

import { AuthService } from './services/auth.service';
import { ValidationService } from './services/validation.service';

import { AuthGuard, SetupGuard } from './guards';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatStepperModule
  ],
  declarations: [
    SetupComponent,
    LoginComponent,
    UserComponent,
    TwoFAComponent
  ],
  providers: [
    AuthGuard,
    SetupGuard,
    AuthService,
    ValidationService
  ],
})
export class AuthModule { }
