import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';

import { AuthService } from './services/auth.service';
import { ValidationService } from './services/validation.service';

@NgModule({
  imports: [ RouterModule.forChild([
    {
      path: '',
      component: AuthComponent,
      children: [
        {
          path: 'setup',
          loadChildren: () => import('./routing/setup/setup.module').then(module => module.SetupModule)
        },
        {
          path: 'login',
          loadChildren: () => import('./routing/login/login.module').then(module => module.LoginModule)
        }
      ]
    }
  ]), MatCardModule ],
  declarations: [ AuthComponent ],
  providers: [ AuthService, ValidationService ],
})
export class AuthModule { }
