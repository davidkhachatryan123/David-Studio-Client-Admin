import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoadingComponent } from './website/loading/component/loading.component';

import { WebSiteModule } from './website/website.module';

import { LoadingInterceptor } from './website/loading/interceptor/loading.interceptor';

@NgModule({
  imports: [ BrowserModule, HttpClientModule, RouterModule.forRoot([]),
             WebSiteModule ],
  declarations: [ AppComponent, LoadingComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ]
})
export class AppModule { }
