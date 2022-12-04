import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-new-user-dialog',
  templateUrl: 'new-user.component.html'
})

export class NewUserDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NewUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  create() {

  }
}