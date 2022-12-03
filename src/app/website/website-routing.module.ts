import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './routing/auth/guards';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./routing/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./routing/dashboard/dashboard.module').then(module => module.DashboardModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
})
export class WebsiteRoutingModule { }
