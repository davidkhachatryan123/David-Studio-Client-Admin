import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { TableOptions } from 'src/app/website/models';
import { AppUser } from 'src/app/website/routing/auth/models';
import { NewUser, User } from 'src/app/website/routing/dashboard/pages/users/models';

import { AuthService } from 'src/app/website/routing/auth/services';

@Component({
  selector: 'app-dashboard-users-card',
  templateUrl: 'users-card.component.html',
  styleUrls: [ 'users-card.component.css' ]
})
export class UsersCardComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['username', 'email', 'emailConfirmed', 'phone', 'role', 'actions'];

  @Input() data: User[] = [];
  @Input() resultsLength: number = 0;

  @Output() onChange = new EventEmitter<TableOptions>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onEdit = new EventEmitter<NewUser>();
  @Output() onConfirmEmail = new EventEmitter<string>();

  @ViewChild(MatTable) table: MatTable<User>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private userListOptions: TableOptions = new TableOptions('', '', 0, 0);

  appUser: AppUser = new AppUser('', '', '', '');

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getUser().subscribe(data => this.appUser = data);
  }

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