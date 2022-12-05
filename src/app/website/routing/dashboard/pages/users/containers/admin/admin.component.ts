import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UsersManagmentService } from 'src/app/website/routing/dashboard/pages/users/services';

import { NewUser, User, UserListOptions } from 'src/app/website/routing/dashboard/pages/users/models';
import { ResponseModel } from 'src/app/website/models';

import { UserDeleteDialogComponent, NewUserDialogComponent } from '../../dialogs';

@Component({
  selector: 'app-dashboard-users-admin',
  templateUrl: 'admin.component.html'
})

export class AdminComponent {
  data: User[] = [];
  resultsLength: number = 0;

  private userListOptions: UserListOptions;

  constructor(
    private usersManagmentService: UsersManagmentService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) { }

  onChangeUserCard(userListOptions: UserListOptions) {
    this.userListOptions = userListOptions;
    this.getUsers();
  }

  getUsers() {
    this.usersManagmentService.getAdminUsers(
      this.userListOptions.sort,
      this.userListOptions.sortDirection,
      this.userListOptions.pageIndex,
      this.userListOptions.pageSize,
    ).subscribe(data => {
      this.data = data.users;
      this.resultsLength = data.totalCount;
    });
  }

  onCreate() {
    this.openCreateDialog(null);
  }
  openCreateDialog(newUser: NewUser) {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '500px',
      data: { data: newUser }
    });
  }
  create(newUser: NewUser) {
    console.log(newUser);
  }

  onDelete($event: any) {
    this.openDeleteDialog($event.id, $event.username);
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
    this.usersManagmentService.deleteAdminUser(id)
    .subscribe((data: ResponseModel) => {
      this._snackBar.open(data.message, 'Ok', {
        duration: 10000,
      });

      if(data.statusCode == '200')
        this.getUsers();
    });
  }

  onEdit($event: any) {
    console.log('Edit: ', $event);
  }
}