import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material-module';
import { ListItemComponent } from './list-item/list-item.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { DropFileDirective } from '../directives/drop-file.directive';
import { PaginatorComponent } from './paginator/paginator.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { ContentCreatorComponent } from './content-creator/content-creator.component';
import { CardNewsComponent } from './card-news/card-news.component';

@NgModule({
  declarations: [
    ListItemComponent,
    ProfilePictureComponent,
    UploadFilesComponent,
    DropFileDirective,
    PaginatorComponent,
    UserAvatarComponent,
    ContentCreatorComponent,
    CardNewsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListItemComponent,
    ProfilePictureComponent,
    UploadFilesComponent,
    PaginatorComponent,
    UserAvatarComponent,
    ContentCreatorComponent,
    CardNewsComponent
  ]
})
export class ComponentsModule { }
