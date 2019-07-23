import { NgModule } from '@angular/core';
import {SuperDialogComponent} from '../components/super-dialog/super-dialog.component'
import { RouterModule } from '@angular/router';
import {SuperDialogService} from '../services/super-dialog.service'
@NgModule({
  declarations: [
    SuperDialogComponent
  ],
  exports:[
    SuperDialogComponent,
  ],
  providers: [
    SuperDialogService
  ],
  imports: [
    RouterModule
  ]
})
export class SuperDialogModule { }
