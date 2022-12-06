import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from 'src/app/website/shared/shared.module';

import { FilesComponent } from './containers';

@NgModule({
  imports: [
    MainRoutingModule,
    SharedModule,
  ],
  declarations: [
    FilesComponent,
  ],
})
export class MainModule { }
