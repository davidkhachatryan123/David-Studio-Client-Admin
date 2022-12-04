import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-user-delete-dialog',
  templateUrl: 'user-delete.component.html'
})

export class UserDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UserDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  yes() {
    this.data.isDelete = 'true';
  }
}