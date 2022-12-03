import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetupComponent, LoginComponent } from './components';
import { SetupGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'setup'
  },
  {
    path: 'setup',
    component: SetupComponent,
    canActivate: [SetupGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class AuthRoutingModule { }
