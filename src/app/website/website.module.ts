import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  ]), HttpClientModule, BrowserAnimationsModule ],
  declarations: [],
  providers: [],
})
export class WebSiteModule { }
