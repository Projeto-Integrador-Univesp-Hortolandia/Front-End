import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';

import { MaterialModule } from 'src/app/material-module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FieldsModule } from 'src/app/shared/components/fields/fields.module';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasCreateComponent } from './noticias-create/noticias-create.component';
import { NoticiasReadComponent } from './noticias-read/noticias-read.component';
import { NoticiasUpdateComponent } from './noticias-update/noticias-update.component';
import { NoticiasComponent } from './noticias/noticias.component';


@NgModule({

  imports: [
    CommonModule,
    NoticiasRoutingModule,
    MaterialModule,
    FieldsModule,
    ReactiveFormsModule,
    FormsModule,
    InfiniteScrollModule,
    MatMenuModule
  ],
/*  exports:[
    CommonModule,
    NoticiasRoutingModule,
    MaterialModule,
    FieldsModule,
    ReactiveFormsModule,
    FormsModule,
    InfiniteScrollModule,
    MatMenuModule
  ],*/

  declarations: [
    NoticiasCreateComponent,
    NoticiasReadComponent,
    NoticiasUpdateComponent,
    NoticiasComponent
  ]
})
export class NoticiasModule { }
