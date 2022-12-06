import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.moule';
import { SharedModule } from 'src/app/website/shared/shared.module';

import { ServicesComponent } from './containers';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
  declarations: [
    ServicesComponent,
  ],
})
export class HomeModule { }
