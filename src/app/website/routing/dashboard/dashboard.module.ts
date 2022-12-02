import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [ RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: DashboardComponent
    }]) ],
  declarations: [ ],
  providers: [ ],
})
export class DashboardModule { }
