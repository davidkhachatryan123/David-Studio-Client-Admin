import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/environment"
import { ResponseModel } from '../models/response';
import { SetupUser } from '../models/setup-user';
import { User } from '../models/user';
import { TwoFA } from '../models/2fa';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "auth";

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
    return this.http.post<ResponseModel>(this.apiUrl + "/loginTwoFactor", twoFA, { withCredentials: true });
  }

  signOut() {
    return this.http.get(this.apiUrl + "/signOut", { withCredentials: true });
  }
}