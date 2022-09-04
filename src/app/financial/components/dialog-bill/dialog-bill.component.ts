import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DataBillModal } from '../../models/data-bill-modal.model';
import { BillsService } from './../../services/bills.service';

@Component({
  selector: 'app-dialog-bill',
  templateUrl: './dialog-bill.component.html',
  styleUrls: ['./dialog-bill.component.scss']
})
export class DialogBillComponent implements OnInit {

  public formBill: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogBillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataBillModal,
    public formBuilder: FormBuilder,
    public billsService: BillsService) {
    this.startForm();
  }

  ngOnInit() {
  }

  onSubmit(form, includeOrUpdate: boolean) {
    this.billsService.postBill(form).subscribe(res => {
      this.dialogRef.close({ includeOrUpdate })
    }, erro => {

    });
  }

  public startForm(): void {
    this.formBill = this.formBuilder.group({
      description: ['', [Validators.required, Validators.maxLength(50)]],
      amount: ['', [Validators.required]],
      type: ['', [Validators.required]],
      status: [false, [Validators.required]]
    });
  }

}
