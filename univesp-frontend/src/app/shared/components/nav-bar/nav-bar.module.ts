import { ListMessengerComponent } from 'src/app/messeger/list-messenger/list-messenger.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { MaterialModule } from 'src/app/material-module';
import { ContentComponent } from 'src/app/content/content.component';
import { MessegerComponent } from 'src/app/messeger/messeger.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],

  exports: [
    CommonModule,
    MaterialModule,
    //MessegerComponent,
    //ContentComponent
  ],

  declarations: [
    MessegerComponent,
    ContentComponent,
    NavBarComponent


  ]
})
export class NavBarModule { }
