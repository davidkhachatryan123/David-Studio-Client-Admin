import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../auth/models/response';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  response: string;

  constructor(
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.http.get<ResponseModel>('http://localhost:5147/api/admin/auth/test', { withCredentials: true })
    .subscribe((data: ResponseModel) => {
      this.response = data.message;
    });
  }
}