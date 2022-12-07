import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-user-delete-dialog',
  templateUrl: 'delete.component.html'
})

export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  yes() {
    this.data.isDelete = 'true';
  }
}