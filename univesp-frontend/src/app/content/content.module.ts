import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
//import { ContentComponent } from './content.component';

import { ComponentsModule } from '../shared/components/components.module';
import { MaterialModule } from '../material-module';
import { NavBarModule } from '../shared/components/nav-bar/nav-bar.module';

@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    ComponentsModule,
    MaterialModule,
    NavBarModule
  ],
  exports: [

  ]
})
export class ContentModule { }
