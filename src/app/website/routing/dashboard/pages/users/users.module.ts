import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

import { AdminComponent } from './containers';
import { UsersCardComponent, ActionCardComponent } from './components';

import { UserDeleteDialogComponent, NewUserDialogComponent } from './dialogs';

@NgModule({
  imports: [
    UsersRoutingModule,
    SharedModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [
    AdminComponent,
    UsersCardComponent,
    UserDeleteDialogComponent,
    ActionCardComponent,
    NewUserDialogComponent
  ],
})
export class UsersModule { }
