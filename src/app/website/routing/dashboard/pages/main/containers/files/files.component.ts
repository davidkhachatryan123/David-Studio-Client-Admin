import { Component } from '@angular/core';
import { HttpEventType } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';

import { FilesService } from 'src/app/website/routing/dashboard/pages/main/services';

import { ResponseModel } from 'src/app/website/models';

@Component({
  selector: 'app-dashboard-main-files',
  templateUrl: 'files.component.html',
  styleUrls: [ 'files.component.css' ]
})
export class FilesComponent {
  fileUploadProgress: number;

  constructor(
    private filesService: FilesService,
    private _snackBar: MatSnackBar
  ) { }

  onUpload($event: File[]) {
    this.filesService.uploadImage($event).subscribe({
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
}