import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material-module';
import { ListItemComponent } from './list-item/list-item.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';

@NgModule({
  declarations: [
    ListItemComponent,
    ProfilePictureComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListItemComponent,
    ProfilePictureComponent
  ]
})
export class ComponentsModule { }
