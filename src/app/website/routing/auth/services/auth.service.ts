import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/environment";
import { map, Observable, first } from 'rxjs';

import { ResponseModel, SetupUser, AppUser, User, TwoFA } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "auth";
  private appUser: Observable<AppUser> | undefined;

  constructor(
    private http: HttpClient) {
    this.apiUrl = environment.config.apiUrl + this.apiUrl;
  }

  isSetup() {
    return this.http.get<boolean>(this.apiUrl + "/isSetup");
  }

  isLoggedIn() {
    return this.http.get<boolean>(this.apiUrl + "/isLoggedIn", { withCredentials: true });
  }

  setup(setupUser: SetupUser) {
    return this.http.post<ResponseModel>(this.apiUrl + "/setup", setupUser);
  }

  login(user: User) {
    return this.http.post<ResponseModel>(this.apiUrl + "/login", user, { withCredentials: true });
  }

  twoFA(twoFA: TwoFA) {
    return this.http.post<ResponseModel>(this.apiUrl + "/loginTwoFactor", twoFA, { withCredentials: true })
    .pipe(map((data: ResponseModel) => {
      if(data.statusCode == '200') {
        this.getUser().subscribe();
      }

      return data;
    }));
  }

  getUser() {
    if(this.appUser == undefined)
      return this.getUserFromServer();

    return this.appUser;
  }

  private getUserFromServer() {
    return this.appUser = this.http.get<AppUser>(this.apiUrl + "/getUser", { withCredentials: true });
  }

  signOut() {
    return this.http.get(this.apiUrl + "/signOut", { withCredentials: true });
  }
}