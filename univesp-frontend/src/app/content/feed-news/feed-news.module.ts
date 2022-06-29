import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedNewsRoutingModule } from './feed-news-routing.module';
import { FeedNewsComponent } from './feed-news.component';
import { MaterialModule } from 'src/app/material-module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ContentCreatorComponent } from './content-creator/content-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeedNewsComponent,
    ContentCreatorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FeedNewsRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FeedNewsModule { }
