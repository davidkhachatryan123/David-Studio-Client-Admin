import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { UsersResponse, NewUser } from 'src/app/website/routing/dashboard/pages/users/models';
import { ResponseModel, TableOptions } from 'src/app/website/models';

@Injectable()
export class UsersManagmentService {
  private apiUrl = "users";

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.config.apiUrl + this.apiUrl;
  }
  
  getAdminUsers(tableOptions: TableOptions) {
    const params = new HttpParams()
    .set('sort', tableOptions.sort)
    .set('orderDirection', tableOptions.sortDirection)
    .set('page', tableOptions.pageIndex + 1)
    .set('pageSize', tableOptions.pageSize);

    return this.http.get<UsersResponse>(this.apiUrl + '/admins', { params: params, withCredentials: true });
  }

  createAdminUser(newUser: NewUser) {
    return this.http.post<ResponseModel>(this.apiUrl + '/admins', newUser, { withCredentials: true });
  }

  updateAdminUser(newUser: NewUser) {
    return this.http.put<ResponseModel>(this.apiUrl + '/admins', newUser, { withCredentials: true });
  }

  deleteAdminUser(id: string) {
    const params = new HttpParams()
    .set('id', id);

    return this.http.delete<ResponseModel>(this.apiUrl + '/admins', { params: params, withCredentials: true });
  }

  sendConfirmEmail(email: string) {
    const params = new HttpParams()
    .set('email', email);

    return this.http.get<ResponseModel>(this.apiUrl + '/admins/SendConfirmEmail', { params: params, withCredentials: true });
  }
}