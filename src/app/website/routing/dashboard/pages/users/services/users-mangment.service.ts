import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SortDirection } from '@angular/material/sort';

import { User } from 'src/app/website/routing/dashboard/models';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsersManagmentService {
  private apiUrl = "users";

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.config.apiUrl + this.apiUrl;
  }
  
  getAdminUsers(sort: string, order: SortDirection, page: number) {
    const params = new HttpParams()
    .set('sort', sort)
    .set('order', order)
    .set('page', page);

    return this.http.get<Array<User>>(this.apiUrl + '/admins', { params: params, withCredentials: true });
  }
}