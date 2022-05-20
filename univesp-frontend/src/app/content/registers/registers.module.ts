import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistersRoutingModule } from './registers-routing.module';
import { RegistersComponent } from './registers.component';
import { MaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [
    RegistersComponent
  ],
  imports: [
    CommonModule,
    RegistersRoutingModule,
    MaterialModule
  ]
})
export class RegistersModule { }
