import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessegerRoutingModule } from './messeger-routing.module';
import { MessegerComponent } from './messeger.component';


@NgModule({
  declarations: [
    MessegerComponent
  ],
  imports: [
    CommonModule,
    MessegerRoutingModule
  ]
})
export class MessegerModule { }
