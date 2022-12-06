import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilesComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'files'
  },
  {
    path: 'files',
    component: FilesComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class MainRoutingModule { }
