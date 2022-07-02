import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from './shared/utils/custon-date-adapter';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { IConfig, NgxMaskModule } from 'ngx-mask';

registerLocaleData(localePt, 'pt');

const maskConfigFunction: () => Partial<IConfig> = () => {
	return {
		validation: true
	};
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
	HttpClientModule,
	NgxMaskModule.forRoot(maskConfigFunction),

  ],
  bootstrap: [AppComponent],
  providers: [
		{ provide: LOCALE_ID, useValue: 'pt' },
		{
			provide: DEFAULT_CURRENCY_CODE,
			useValue: 'BRL'
		},
		{
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
			useValue: { appearance: 'outline' }
		},
		{
			provide: DateAdapter,
			useClass: CustomDateAdapter,
			deps: [MAT_DATE_LOCALE]
		},
		{
			provide: MAT_DATE_FORMATS,
			useValue: {
				parse: {
					dateInput: ['DD,MM,YYYY']
				},
				display: {
					dateInput: 'DD/MM/YYYY',
					monthYearLabel: 'MMM YYYY',
					dateA11yLabel: 'L'
				}
			}
		}
	]
})
export class AppModule { }
