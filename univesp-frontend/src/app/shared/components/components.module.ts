import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material-module';
import { ListItemComponent } from './list-item/list-item.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { DropFileDirective } from '../directives/drop-file.directive';

@NgModule({
  declarations: [
    ListItemComponent,
    ProfilePictureComponent,
    UploadFilesComponent,
    DropFileDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListItemComponent,
    ProfilePictureComponent,
    UploadFilesComponent
  ]
})
export class ComponentsModule { }
