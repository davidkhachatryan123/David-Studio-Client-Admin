import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { FilesService } from 'src/app/website/routing/dashboard/pages/main/services';

import { ResponseModel } from 'src/app/website/models';

@Component({
  selector: 'app-dashboard-main-files',
  templateUrl: 'files.component.html',
  styleUrls: [ 'files.component.css' ]
})
export class FilesComponent {
  constructor(
    private filesService: FilesService,
    private _snackBar: MatSnackBar
  ) { }

  onUpload($event: File) {
    this.filesService.uploadImage($event).subscribe(
      (data: ResponseModel) => {
  
        this._snackBar.open(data.message, 'Ok', {
          duration: 10000,
        });
  
        if(data.statusCode == '200') {
          console.log('File(s) uploaded successfully!');
        }
      });
  }
}