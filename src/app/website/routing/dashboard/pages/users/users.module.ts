import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

import { AdminComponent } from './containers';
import { UsersCardComponent, ActionCardComponent } from './components';

import { NewUserDialogComponent } from './dialogs';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  declarations: [
    AdminComponent,
    UsersCardComponent,
    ActionCardComponent,
    NewUserDialogComponent
  ],
})
export class UsersModule { }
