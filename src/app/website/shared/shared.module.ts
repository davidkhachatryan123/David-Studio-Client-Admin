import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card'

import { AuthLayoutComponent } from './auth/auth-layout.component';
import { DashboardLayoutComponent, ToolBarComponent } from './dashboard';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    DashboardLayoutComponent,
    ToolBarComponent
  ],
  imports: [
    MatCardModule
  ],
  exports: [
    AuthLayoutComponent,
    DashboardLayoutComponent
  ],
})
export class SharedModule { }
