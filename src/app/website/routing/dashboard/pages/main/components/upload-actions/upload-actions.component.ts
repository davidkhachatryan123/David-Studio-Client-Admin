import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-main-upload-actions',
  templateUrl: 'upload-actions.component.html',
  styleUrls: [ 'upload-actions.component.css' ]
})

export class UploadActionsComponent {
  @Output() onUpload = new EventEmitter<File[]>();
  @Input() progress = 0;

  onChange(event) {
    this.onUpload.emit(event);
  }
}