import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card'

import { AuthLayoutComponent } from './auth/auth-layout.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AuthLayoutComponent,
  ],
  imports: [
    MatCardModule,
    DashboardModule
  ],
  exports: [
    AuthLayoutComponent,
    DashboardModule
  ],
})
export class SharedModule { }
