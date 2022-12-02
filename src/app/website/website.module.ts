import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from './routing/auth/guards/auth.guard';
import { AuthService } from './routing/auth/services/auth.service';

@NgModule({
  imports: [ RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'dashboard'
    },
    {
      path: 'auth',
      loadChildren: () => import('./routing/auth/auth.module').then(module => module.AuthModule)
    },
    {
      path: 'dashboard',
      canActivate: [ AuthGuard ],
      loadChildren: () => import('./routing/dashboard/dashboard.module').then(module => module.DashboardModule)
    }
  ]), HttpClientModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule ],
  declarations: [ ],
  providers: [ AuthGuard ],
})
export class WebSiteModule { }
