import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.moule';
import { SharedModule } from 'src/app/website/shared/shared.module';

import { MatTabsModule } from '@angular/material/tabs'

import { ServicesComponent } from './containers';
import { ServicesTabsComponent } from './componenets';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
    MatTabsModule,
  ],
  declarations: [
    ServicesComponent,
    ServicesTabsComponent
  ],
})
export class HomeModule { }
