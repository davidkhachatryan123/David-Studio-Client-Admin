import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { DashboardLayoutComponent, ToolBarComponent, SidenavComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
  ],
  exports: [
    DashboardLayoutComponent
  ],
  declarations: [
    DashboardLayoutComponent,
    ToolBarComponent,
    SidenavComponent
  ]
})
export class DashboardModule { }
