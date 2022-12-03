import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(module => module.MainModule)
  },
  {
    path: 'ui',
    loadChildren: () => import('./pages/ui/ui.module').then(module => module.UIModule)
  }
  ,
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then(module => module.UsersModule)
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class DashboardRoutingModule { }
