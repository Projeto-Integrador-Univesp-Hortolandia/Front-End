import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';

import { ComponentsModule } from '../shared/components/components.module';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { MaterialModule } from '../material-module';
import { IConfig, NgxMaskModule } from 'ngx-mask';


const maskConfigFunction: () => Partial<IConfig> = () => {
	return {
		validation: true
	};
};

@NgModule({
  declarations: [
    ContentComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    ComponentsModule,
    MaterialModule,
    NgxMaskModule.forRoot(maskConfigFunction)
  ],
  exports: [
    NavBarComponent
  ]
})
export class ContentModule { }
