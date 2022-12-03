import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './components';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
})
export class DashboardModule { }
