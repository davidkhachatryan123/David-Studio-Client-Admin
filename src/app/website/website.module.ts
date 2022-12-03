import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './routing/auth/auth.module';
import { WebsiteRoutingModule } from './website-routing.module';

@NgModule({
  imports: [
    WebsiteRoutingModule,
    SharedModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [],
})
export class WebSiteModule { }
