import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FilesService } from './pages/main/services';
import { UsersManagmentService } from './pages/users/services';

import { DeleteDialogComponent } from 'src/app/website/routing/dashboard/dialogs';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    DeleteDialogComponent,
  ],
  providers: [
    FilesService,
    UsersManagmentService,
  ]
})
export class DashboardModule { }
