import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../../../../shared/shared.module';

import { HomeComponent, MailsComponent } from './components';

@NgModule({
  imports: [
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    MailsComponent
  ],
})
export class MainModule { }
