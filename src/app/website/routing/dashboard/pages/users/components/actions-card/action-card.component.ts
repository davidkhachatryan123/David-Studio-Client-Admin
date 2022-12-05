import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-action-card',
  templateUrl: 'action-card.component.html',
  styleUrls: [ 'action-card.component.css' ]
})

export class ActionCardComponent {
  @Output() onCreate = new EventEmitter<boolean>();

  onCreateEvent() {
    this.onCreate.emit(true);
  }
}