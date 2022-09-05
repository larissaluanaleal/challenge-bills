import { BillModel } from './../../models/bill.model';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DataBillModal } from '../../models/data-bill-modal.model';
import { BillsService } from './../../services/bills.service';

@Component({
  selector: 'app-dialog-bill',
  templateUrl: './dialog-bill.component.html',
  styleUrls: ['./dialog-bill.component.scss']
})
export class DialogBillComponent implements OnInit, OnDestroy {

  public formBill: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogBillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataBillModal,
    public formBuilder: FormBuilder,
    public billsService: BillsService) {
    this.startForm();
  }

  ngOnInit() {
    if (this.data.bill) {
      this.setForm(this.data.bill);
    }
  }

  public onSubmit(form) {
    if (!this.data.bill) {
      this.billsService.postBill(form).subscribe(res => {
        this.dialogRef.close({ updateList: true })
      }, erro => {

      });
    } else {
      this.billsService.putBill(form).subscribe(res => {
        this.dialogRef.close({ updateList: true })
      }, erro => {

      });
    }
  }

  public startForm(): void {
    this.formBill = this.formBuilder.group({
      description: ['', [Validators.required, Validators.maxLength(40)]],
      amount: ['', [Validators.required]],
      type: ['', [Validators.required]],
      status: [false, [Validators.required]],
      id: ['']
    });
  }

  public setForm(bill: BillModel): void {
    this.formBill.get('description').setValue(bill.description);
    this.formBill.get('amount').setValue(bill.amount);
    this.formBill.get('type').setValue(bill.type);
    this.formBill.get('status').setValue(bill.status);
    this.formBill.get('id').setValue(bill.id);
  }

  ngOnDestroy(): void {
    this.formBill.reset()
  }

}
