import { Component } from '@angular/core';
import { HttpEventType } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { FilesService } from 'src/app/website/routing/dashboard/pages/main/services';

import { TableOptions, ResponseModel } from 'src/app/website/models';
import { Upload } from 'src/app/website/routing/dashboard/pages/main/models';

import { DeleteDialogComponent } from 'src/app/website/routing/dashboard/dialogs';

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
            this.getFiles();
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
    this.openDeleteDialog($event.id, $event.name);
  }
  openDeleteDialog(id: number, name: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: { value: name, isDelete: 'false' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.delete(id);
    });
  }
  delete(id: number) {
    console.log('delete', id);
    this.filesService.deleteFile(id)
    .subscribe((data: ResponseModel) => {
      this._snackBar.open(data.message, 'Ok', {
        duration: 10000,
      });

      if(data.statusCode == '200')
        this.getFiles();
    });
  }
}