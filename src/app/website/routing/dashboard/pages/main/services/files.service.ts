import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { ResponseModel } from 'src/app/website/models';

@Injectable()
export class FilesService {
  private apiUrl = "files";

  constructor(private http: HttpClient) {
    this.apiUrl = environment.config.apiUrl + this.apiUrl;
  }
  
  uploadImage(files: File[]) {
      const formData = new FormData();

      for (const file of files) {
        formData.append("uploadedFiles", file);
      }

      return this.http.post<ResponseModel>(this.apiUrl, formData, {
        withCredentials: true
      });
  }
}