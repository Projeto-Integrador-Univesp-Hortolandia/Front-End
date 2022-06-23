import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessegerRoutingModule } from './messeger-routing.module';
import { MessegerComponent } from './messeger.component';
import { MaterialModule } from '../material-module';


@NgModule({
  declarations: [
    MessegerComponent
  ],
  imports: [
    CommonModule,
    MessegerRoutingModule,
    MaterialModule
  ]
})
export class MessegerModule { }
