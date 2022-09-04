import { TransformBillTypePipe } from './pipes/transform-bill-type.pipe';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillsComponent } from './components/bills/bills.component';
import { BillsService } from './services/bills.service';
import { MaterialModule } from '../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    BillsComponent,
    TransformBillTypePipe
  ],
  exports:[BillsComponent],
  providers: [
    BillsService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class FinancialModule { }
