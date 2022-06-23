import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

import { MaterialModule } from 'src/app/material-module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FieldsModule } from 'src/app/shared/components/fields/fields.module';

import { FeedNewsRoutingModule } from './feed-news-routing.module';
import { FeedNewsComponent } from './feed-news.component';
import { NoticiasReadComponent } from './noticias-read/noticias-read.component';
import { NoticiasUpdateComponent } from './noticias-update/noticias-update.component';
import { NoticiasCreateComponent } from './noticias-create/noticias-create.component';


@NgModule({
  imports: [
    CommonModule,
    FeedNewsRoutingModule,
    MaterialModule,
    FieldsModule,
    ReactiveFormsModule,
    FormsModule,
    InfiniteScrollModule,
    MatMenuModule
  ],
  declarations: [
    FeedNewsComponent,
    NoticiasReadComponent,
    NoticiasUpdateComponent,
    NoticiasCreateComponent
  ],

})
export class FeedNewsModule { }
