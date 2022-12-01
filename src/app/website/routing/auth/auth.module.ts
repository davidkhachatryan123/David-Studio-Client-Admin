import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from './services/auth.service';
import { ValidationService } from './services/validation.service';

@NgModule({
  imports: [ RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    },
    {
      path: 'setup',
      loadChildren: () => import('./setup/setup.module').then(module => module.SetupModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
    }
  ]) ],
  providers: [ AuthService, ValidationService ],
})
export class AuthModule { }
