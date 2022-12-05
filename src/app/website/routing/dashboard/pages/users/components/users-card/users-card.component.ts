import { Component, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { NewUser, User, UserListOptions } from 'src/app/website/routing/dashboard/pages/users/models';

@Component({
  selector: 'app-dashboard-users-card',
  templateUrl: 'users-card.component.html',
  styleUrls: [ 'users-card.component.css' ]
})
export class UsersCardComponent implements AfterViewInit {
  displayedColumns: string[] = ['username', 'email', 'emailConfirmed', 'phone', 'role', 'actions'];

  @Input() data: User[] = [];
  @Input() resultsLength: number = 0;

  @Output() onChange = new EventEmitter<UserListOptions>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onEdit = new EventEmitter<NewUser>();
  @Output() onConfirmEmail = new EventEmitter<string>();

  @ViewChild(MatTable) table: MatTable<User>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private userListOptions: UserListOptions = new UserListOptions('', '', 0, 0);

  ngAfterViewInit() {
    this.onChangeEvent();

    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
      this.onChangeEvent();
    });

    this.paginator.page.subscribe(() => {
      this.onChangeEvent();
    });
  }

  onChangeEvent() {
    this.userListOptions.sort = this.sort.active;
    this.userListOptions.sortDirection = this.sort.direction;
    this.userListOptions.pageIndex = this.paginator.pageIndex;
    this.userListOptions.pageSize = this.paginator.pageSize;

    this.onChange.emit(this.userListOptions);
  }

  onDeleteEvent(id: number, username: string) {
    this.onDelete.emit({id, username});
  }

  onEditEvent(
    id: string,
    username: string,
    password: string,
    email: string,
    phoneNumber: string,
    role: string
  ) {
    this.onEdit.emit(new NewUser(
      id, username, password, email, phoneNumber, role
    ));
  }

  onConfirmEmailEvent(email: string) {
    this.onConfirmEmail.emit(email);
  }
}