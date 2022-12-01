import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../../environments/environment"
import { ResponseModel } from '../models/response';
import { SetupUser } from '../models/setup-user';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "auth"

  constructor(private http: HttpClient) {
    this.apiUrl = environment.config.apiUrl + this.apiUrl;
  }

  isSetup() {
    return this.http.get(this.apiUrl + "/isSetup");
  }

  setup(setupUser: SetupUser) {
    return this.http.post<ResponseModel>(this.apiUrl + "/setup", setupUser);
  }

  login(user: User) {
    return this.http.post<ResponseModel>(this.apiUrl + "/login", user);
  }
}