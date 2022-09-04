import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule,} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(ptBr)

import { MaterialModule } from './material/material.module';
import { FinancialModule } from './financial/financial.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FinancialModule
  ],
  exports:[MaterialModule],
  providers: [
  { provide: LOCALE_ID, useValue: 'pt' },
  { provide:  DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
],
  bootstrap: [AppComponent],

})
export class AppModule { }
