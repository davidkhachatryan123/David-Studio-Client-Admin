import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { ResponseModel, TableOptions } from 'src/app/website/models';
import { FilesResponse } from 'src/app/website/routing/dashboard/pages/main/models';

@Injectable()
export class FilesService {
  private apiUrl = "files";

  constructor(private http: HttpClient) {
    this.apiUrl = environment.config.apiUrl + this.apiUrl;
  }
  
  uploadFile(files: File[]) {
    const formData = new FormData();

    for (const file of files) {
      formData.append("uploadedFiles", file);
    }

    return this.http.post<ResponseModel>(this.apiUrl, formData, {
      withCredentials: true,
      reportProgress: true, observe: 'events'
    });
  }

  getFiles(tableOptions: TableOptions) {
    const params = new HttpParams()
    .set('sort', tableOptions.sort)
    .set('orderDirection', tableOptions.sortDirection)
    .set('page', tableOptions.pageIndex + 1)
    .set('pageSize', tableOptions.pageSize);

    return this.http.get<FilesResponse>(this.apiUrl, { params: params, withCredentials: true });
  }
}