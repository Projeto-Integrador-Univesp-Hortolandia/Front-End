import { ListMessengerRoutingModule } from './list-messenger/list-messenger-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { RegisterMessengerComponent } from './register-messenger/register-messenger.component';
import { ViewMessengerComponent } from './view-messenger/view-messenger.component';
import { ListMessengerComponent } from './list-messenger/list-messenger.component';
import { MessegerComponent } from './messeger.component';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

import { FieldsModule } from 'src/app/shared/components/fields/fields.module';
import { MaterialModule } from '../material-module';
import { MessegerRoutingModule } from './messeger-routing.module';
import { NavBarModule } from '../shared/components/nav-bar/nav-bar.module';

@NgModule({
  declarations: [
    RegisterMessengerComponent,
    ViewMessengerComponent,
    ListMessengerComponent,
    //MessegerComponent,
    AlertComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FieldsModule,
    InfiniteScrollModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MessegerRoutingModule,
    NavBarModule,
    ListMessengerRoutingModule



  ],

  entryComponents: [AlertComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
  //bootstrap: [MessegerComponent]

})
export class MessegerModule { }
