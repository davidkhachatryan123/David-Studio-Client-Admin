import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { LoadingComponent } from './website/loading/component/loading.component';
import { LoadingInterceptor } from './website/loading/interceptor/loading.interceptor';

import { WebSiteModule } from './website/website.module';

@NgModule({
  imports: [
    RouterModule.forRoot([], {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    }),
    WebSiteModule
  ],
  declarations: [ AppComponent, LoadingComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ]
})
export class AppModule { }
