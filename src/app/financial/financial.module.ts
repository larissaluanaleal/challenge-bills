import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransformBillTypePipe } from './pipes/transform-bill-type/transform-bill-type.pipe';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillsComponent } from './components/bills/bills.component';
import { BillsService } from './services/bills.service';
import { MaterialModule } from '../material/material.module';
import { DialogBillComponent } from './components/dialog-bill/dialog-bill.component';
import { TransformBillStatusPipe } from './pipes/transform-bill-status/transform-bill-status.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    BillsComponent,
    TransformBillTypePipe,
    DialogBillComponent,
    TransformBillStatusPipe
  ],
  exports:[BillsComponent],
  providers: [
    BillsService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class FinancialModule { }
