import { BillsComponent } from './components/bills/bills.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillsService } from './services/bills.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BillsComponent
  ],
  providers: [
    BillsService
  ]
})
export class FinancialModule { }
