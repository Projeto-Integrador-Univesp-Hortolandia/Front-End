import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedNewsRoutingModule } from './feed-news-routing.module';
import { FeedNewsComponent } from './feed-news.component';


@NgModule({
  declarations: [
    FeedNewsComponent
  ],
  imports: [
    CommonModule,
    FeedNewsRoutingModule
  ]
})
export class FeedNewsModule { }
