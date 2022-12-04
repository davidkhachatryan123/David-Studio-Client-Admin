import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { UsersManagmentService } from './pages/users/services';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [],
  providers: [
    UsersManagmentService
  ]
})
export class DashboardModule { }
