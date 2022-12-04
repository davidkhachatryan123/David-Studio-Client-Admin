import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { NewUserDialogComponent } from 'src/app/website/routing/dashboard/pages/users/dialogs';

@Component({
  selector: 'app-dashboard-action-card',
  templateUrl: 'action-card.component.html',
  styleUrls: [ 'action-card.component.css' ]
})

export class ActionCardComponent {
  constructor(
    public dialog: MatDialog
  ) { }

  openCreateDialog() {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '500px',
      disableClose: true
    });
  }
}