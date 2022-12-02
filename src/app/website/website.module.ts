import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'auth'
    },
    {
      path: 'auth',
      loadChildren: () => import('./routing/auth/auth.module').then(module => module.AuthModule)
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./routing/dashboard/dashboard.module').then(module => module.DashboardModule)
    }
  ]), HttpClientModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule ],
  declarations: [ ],
  providers: [ ],
})
export class WebSiteModule { }
