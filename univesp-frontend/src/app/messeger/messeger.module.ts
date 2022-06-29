import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessegerRoutingModule } from './messeger-routing.module';
import { MessegerComponent } from './messeger.component';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MessegerComponent
  ],
  imports: [
    CommonModule,
    MessegerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MessegerModule { }
