import { NgModule } from '@angular/core';

import { UIRoutingModule } from './ui-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

import { ServicesComponent, ProjectsComponent } from './components';

@NgModule({
  imports: [
    UIRoutingModule,
    SharedModule
  ],
  declarations: [
    ServicesComponent,
    ProjectsComponent
  ],
})
export class UIModule { }
