import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { WebSiteModule } from './website/website.module';

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot([]), BrowserAnimationsModule,
             WebSiteModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
