import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-main-upload-actions',
  templateUrl: 'upload-actions.component.html',
  styleUrls: [ 'upload-actions.component.css' ]
})

export class UploadActionsComponent {
  @Output() file: File = null;
  @Output() onUpload = new EventEmitter<boolean>();

  onChange(event) {
    this.file = event.target.files[0];
  }

  onUploadEvent() {
    this.onUpload.emit(true);
  }
}