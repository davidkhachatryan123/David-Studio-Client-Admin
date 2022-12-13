import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Language } from 'src/app/website/models';

@Injectable()
export class LanguageService {
  private apiUrl = "languages";

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.config.apiUrl + this.apiUrl;
  }

  getLanguages() {
    return this.http.get<Array<Language>>(this.apiUrl, { withCredentials: true });
  }
}