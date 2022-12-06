import { Component } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UsersManagmentService } from 'src/app/website/routing/dashboard/pages/users/services';


import { ResponseModel, TableOptions } from 'src/app/website/models';
import { NewUser, User, UserRoles } from 'src/app/website/routing/dashboard/pages/users/models';

import { UserDeleteDialogComponent, NewUserDialogComponent } from '../../dialogs';

@Component({
  selector: 'app-dashboard-users-admin',
  templateUrl: 'admin.component.html'
})

export class AdminComponent {
  data: User[] = [];
  resultsLength: number = 0;

  private userListOptions: TableOptions;
  private createDialogRef: MatDialogRef<NewUserDialogComponent>;

  constructor(
    private usersManagmentService: UsersManagmentService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) { }

  onChangeUserCard(userListOptions: TableOptions) {
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
    this.openCreateDialog();
  }
  openCreateDialog() {
    this.createDialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '500px',
      data: { user: new NewUser('', '', '', '', '', UserRoles.MANAGER) }
    });

    this.createDialogRef.componentInstance.title = "Create new User";
    this.createDialogRef.componentInstance.submitBtnText = "Create";

    this.createDialogRef.componentInstance.onSubmit.subscribe((data: any) => {
      this.create(data);
    });
  }
  create(newUser: NewUser) {
    this.usersManagmentService.createAdminUser(newUser).subscribe(
    (data: ResponseModel) => {

      this._snackBar.open(data.message, 'Ok', {
        duration: 10000,
      });

      if(data.statusCode == '200') {
        this.createDialogRef.close();
        this.getUsers();
      }
    });
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

  onEdit($event: NewUser) {
    this.openEditDialog($event);
  }
  openEditDialog(newUser: NewUser) {
    this.createDialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '500px',
      data: { user: newUser }
    });

    this.createDialogRef.componentInstance.title = "Edit User";
    this.createDialogRef.componentInstance.submitBtnText = "Edit";

    this.createDialogRef.componentInstance.onSubmit.subscribe((data: NewUser) => {
      this.update(data);
    });
  }
  update(newUser: NewUser) {
    this.usersManagmentService.updateAdminUser(newUser).subscribe(
    (data: ResponseModel) => {
  
      this._snackBar.open(data.message, 'Ok', {
        duration: 10000,
      });
  
      if(data.statusCode == '200') {
        this.createDialogRef.close();
        this.getUsers();
      }
    });
  }

  onConfirmEmail($event: string) {
    this.usersManagmentService.sendConfirmEmail($event).subscribe(
      (data: ResponseModel) => {
    
        this._snackBar.open(data.message, 'Ok', {
          duration: 10000,
        });
    
        if(data.statusCode == '200')
          this.getUsers();
      });
  }
}