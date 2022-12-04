import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { User } from 'src/app/website/routing/dashboard/models';
import { merge, startWith, switchMap, map } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { UsersManagmentService } from 'src/app/website/routing/dashboard/pages/users/services';

@Component({
  selector: 'app-dashboard-users-card',
  templateUrl: 'users-card.component.html',
  styleUrls: [ 'users-card.component.css' ]
})

export class UsersCardComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'username', 'email', 'phone', 'role'];
  data: User[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private usersManagmentService: UsersManagmentService
  ) { }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        return this.usersManagmentService.getAdminUsers(
          this.sort.active,
          this.sort.direction,
          this.paginator.pageIndex,
        );
      }),
    ).subscribe(data => (this.data = data));
  }
}