import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

import { LoadingService } from '../service/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(
    private loadingService: LoadingService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequests++;

    this.loadingService.setLoading(true);

    return next.handle(req).pipe(
      finalize(() => {
        this.totalRequests--;

        if (this.totalRequests == 0) {
          this.loadingService.setLoading(false);
        }
      })
    );
  }
}