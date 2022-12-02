import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ResponseModel } from '../auth/models/response';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  response: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((data: boolean) => {
      if(!data)
        this.router.navigate(['auth']);
    });

    this.http.get<ResponseModel>('http://localhost:5147/api/admin/auth/test', { withCredentials: true })
    .subscribe((data: ResponseModel) => {
      this.response = data.message;
    });
  }
}