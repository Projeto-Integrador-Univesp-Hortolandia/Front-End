import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedNewsRoutingModule } from './feed-news-routing.module';
import { FeedNewsComponent } from './feed-news.component';
import { MaterialModule } from 'src/app/material-module';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    FeedNewsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FeedNewsRoutingModule,
    ComponentsModule
  ]
})
export class FeedNewsModule { }
