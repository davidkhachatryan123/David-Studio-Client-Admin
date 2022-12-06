import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { FilesService } from './pages/main/services';
import { UsersManagmentService } from './pages/users/services';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [],
  providers: [
    FilesService,
    UsersManagmentService,
  ]
})
export class DashboardModule { }
