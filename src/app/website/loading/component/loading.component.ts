import { Component } from '@angular/core';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: 'loading.component.html',
  styleUrls: [ 'loading.component.css' ]
})
export class LoadingComponent {
  constructor(public loader: LoadingService) { }
}