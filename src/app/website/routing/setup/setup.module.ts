import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { SetupComponent } from './components/setup.component';

@NgModule({
  imports: [ RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: SetupComponent
    }
  ]),
  FormsModule, ReactiveFormsModule,
  MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule ],
  declarations: [ SetupComponent ],
  providers: [],
})
export class SetupModule { }
