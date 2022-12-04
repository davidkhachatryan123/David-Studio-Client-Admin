import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

import { AdminComponent } from './containers';
import { UsersCardComponent } from './components';

@NgModule({
  imports: [
    UsersRoutingModule,
    SharedModule,
    MatCardModule,
    MatPaginatorModule,
  ],
  declarations: [
    AdminComponent,
    UsersCardComponent
  ],
})
export class UsersModule { }
