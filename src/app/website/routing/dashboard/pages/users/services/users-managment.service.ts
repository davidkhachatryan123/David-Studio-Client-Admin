import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SortDirection } from '@angular/material/sort';

import { UsersResponse } from 'src/app/website/routing/dashboard/pages/users/models';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsersManagmentService {
  private apiUrl = "users";

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.config.apiUrl + this.apiUrl;
  }
  
  getAdminUsers(sort: string, orderDirection: SortDirection, page: number, pageSize: number) {
    const params = new HttpParams()
    .set('sort', sort)
    .set('orderDirection', orderDirection)
    .set('page', page + 1)
    .set('pageSize', pageSize);

    return this.http.get<UsersResponse>(this.apiUrl + '/admins', { params: params, withCredentials: true });
  }
}