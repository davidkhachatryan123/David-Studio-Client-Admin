import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from 'src/app/website/shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { FilesComponent } from './containers';
import { UploadsComponent, UploadActionsComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatDialogModule,
  ],
  declarations: [
    FilesComponent,
    UploadsComponent,
    UploadActionsComponent,
  ]
})
export class MainModule { }
