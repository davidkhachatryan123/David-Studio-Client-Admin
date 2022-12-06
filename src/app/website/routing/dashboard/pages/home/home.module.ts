import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.moule';
import { SharedModule } from 'src/app/website/shared/shared.module';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ServicesComponent } from './containers';
import { ServiceFormComponent, ServicesTabsComponent, ServiceLanguageComponent } from './componenets';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  declarations: [
    ServicesComponent,
    ServicesTabsComponent,
    ServiceFormComponent,
    ServiceLanguageComponent,
  ],
})
export class HomeModule { }
