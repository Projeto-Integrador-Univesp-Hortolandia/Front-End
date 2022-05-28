import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistersRoutingModule } from './registers-routing.module';
import { RegistersComponent } from './registers.component';
import { MaterialModule } from 'src/app/material-module';
import { RegisterGroupComponent } from './register-group/register-group.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    RegistersComponent,
    RegisterGroupComponent
  ],
  imports: [
    CommonModule,
    RegistersRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class RegistersModule { }
