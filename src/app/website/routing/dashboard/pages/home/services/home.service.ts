import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Service } from 'src/app/website/routing/dashboard/pages/home/models';
import { ResponseModel } from 'src/app/website/models';

@Injectable()
export class HomeService {
  private apiUrl = "homeServices";

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.config.apiUrl + this.apiUrl;
  }

  getServices() {
    return this.http.get<Array<Service>>(this.apiUrl + "/services", { withCredentials: true });
  }
}