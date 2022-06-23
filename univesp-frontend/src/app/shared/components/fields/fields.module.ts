import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material-module';
import { InputDateComponent } from './input-date/input-date.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';

@NgModule({
  declarations: [
    InputDateComponent,
    InputNumberComponent,
    InputSelectComponent,
    InputTextComponent,
    InputTextareaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    InputTextComponent,
    InputNumberComponent,
    InputDateComponent,
    InputTextareaComponent,
    InputSelectComponent
  ]
})
export class FieldsModule { }
