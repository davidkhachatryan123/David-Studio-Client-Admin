import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

import { AdminComponent } from './components';

@NgModule({
  imports: [
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminComponent
  ],
})
export class UsersModule { }
