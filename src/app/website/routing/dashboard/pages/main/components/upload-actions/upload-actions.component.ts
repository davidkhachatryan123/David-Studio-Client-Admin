import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-main-upload-actions',
  templateUrl: 'upload-actions.component.html',
  styleUrls: [ 'upload-actions.component.css' ]
})

export class UploadActionsComponent {
  @Output() onUpload = new EventEmitter<File[]>();

  onChange(event) {
    this.onUpload.emit(event);
  }
}