import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    },
    {
      path: 'login',
      loadChildren: () => import('./routing/login/login.module').then(module => module.LoginModule)
    }
  ]) ],
  declarations: [],
  providers: [],
})
export class WebSiteModule { }
