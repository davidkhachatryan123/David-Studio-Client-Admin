import { Component } from '@angular/core';
import { HttpEventType } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { FilesService } from 'src/app/website/routing/dashboard/pages/main/services';

import { TableOptions } from 'src/app/website/models';
import { Upload } from 'src/app/website/routing/dashboard/pages/main/models';

@Component({
  selector: 'app-dashboard-main-files',
  templateUrl: 'files.component.html',
  styleUrls: [ 'files.component.css' ]
})
export class FilesComponent {
  fileUploadProgress: number;

  data: Upload[] = [];
  resultsLength: number = 0;

  private fileListOptions: TableOptions;

  constructor(
    private filesService: FilesService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  onUpload($event: File[]) {
    this.filesService.uploadFile($event).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.fileUploadProgress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {

          this._snackBar.open(event.body.message, 'Ok', {
            duration: 10000,
          });

          if(event.body.statusCode == '200') {
            this.fileUploadProgress = 0;
            console.log('File(s) uploaded successfully!');
          }
        }
      }
    });
  }

  onChangeFilesList(fileListOptions: TableOptions) {
    this.fileListOptions = fileListOptions;
    this.getFiles();
  }

  getFiles() {
    this.filesService.getFiles(new TableOptions(
      this.fileListOptions.sort,
      this.fileListOptions.sortDirection,
      this.fileListOptions.pageIndex,
      this.fileListOptions.pageSize,
    )
    ).subscribe(data => {
      this.data = data.files;
      this.resultsLength = data.totalCount;
    });
  }

  onDelete($event: any) {
    console.log($event);
    //this.openDeleteDialog($event.id, $event.username);
  }
  /*openDeleteDialog(id: string, username: string) {
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
  }*/
}