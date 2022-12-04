import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { UsersManagmentService } from 'src/app/website/routing/dashboard/pages/users/services';

import { NewUserDialogComponent } from 'src/app/website/routing/dashboard/pages/users/dialogs';

import { User } from 'src/app/website/routing/dashboard/pages/users/models';

@Component({
  selector: 'app-dashboard-action-card',
  templateUrl: 'action-card.component.html',
  styleUrls: [ 'action-card.component.css' ]
})

export class ActionCardComponent {
  newUser: User | undefined;

  constructor(
    private usersManagmentService: UsersManagmentService,
    public dialog: MatDialog
  ) { }

  openCreateDialog() {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '500px',
      data: { newUser: this.newUser }
    });

    dialogRef.afterClosed().subscribe((result: User) => {
      console.log(result);
    });
  }
}