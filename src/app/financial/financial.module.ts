import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillsService } from './services/bills.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  providers: [
    BillsService
  ]
})
export class FinancialModule { }
