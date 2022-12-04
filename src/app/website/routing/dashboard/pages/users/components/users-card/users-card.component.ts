import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { User } from 'src/app/website/routing/dashboard/pages/users/models';
import { merge, startWith, switchMap, map } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { UsersManagmentService } from 'src/app/website/routing/dashboard/pages/users/services';
import { UserDeleteDialogComponent } from '../../dialogs';

@Component({
  selector: 'app-dashboard-users-card',
  templateUrl: 'users-card.component.html',
  styleUrls: [ 'users-card.component.css' ]
})

export class UsersCardComponent implements AfterViewInit {
  displayedColumns: string[] = ['username', 'email', 'emailConfirmed', 'phone', 'role', 'actions'];
  data: User[] = [];
  resultsLength: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private usersManagmentService: UsersManagmentService,
    public dialog: MatDialog
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
          this.paginator.pageSize,
        );
      }),
    ).subscribe(data => {
      this.data = data.users;
      this.resultsLength = data.totalCount;
    });
  }

  edit(id: string) {
    console.log(id);
  }

  openDeleteDialog(id: string, username: string) {
    const dialogRef = this.dialog.open(UserDeleteDialogComponent, {
      width: '250px',
      data: { username: username, isDelete: 'false' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.delete(id);
    });
  }
  
  delete(id: string) {
    console.log(id);
  }
}