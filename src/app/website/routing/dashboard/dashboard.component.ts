import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  response: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://localhost:7147/api/admin/Auth/Test', { withCredentials: true }).subscribe((data: string) => {
      this.response = data;
    });
  }
}