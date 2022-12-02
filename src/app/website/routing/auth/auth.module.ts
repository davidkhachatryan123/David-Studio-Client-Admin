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
      loadChildren: () => import('./routing/setup/setup.module').then(module => module.SetupModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./routing/login/login.module').then(module => module.LoginModule)
    }
  ]) ],
  declarations: [],
  providers: [ AuthService, ValidationService ],
})
export class AuthModule { }
