import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistersRoutingModule } from './registers-routing.module';
import { RegistersComponent } from './registers.component';
import { MaterialModule } from 'src/app/material-module';
import { RegisterGroupComponent } from './register-group/register-group.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { DropFileDirective } from 'src/app/shared/directives/drop-file.directive';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterResponsibleComponent } from './register-responsible/register-responsible.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const maskConfigFunction: () => Partial<IConfig> = () => {
	return {
		validation: true
	};
};

@NgModule({
  declarations: [
    RegistersComponent,
    RegisterGroupComponent,
    RegisterTeacherComponent,
    RegisterStudentComponent,
    RegisterResponsibleComponent,
  ],
  imports: [
    CommonModule,
    RegistersRoutingModule,
    ComponentsModule,
    MaterialModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistersModule { }
