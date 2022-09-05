import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { BillModel } from '../../models/bill.model';
import { BillsService } from '../../services/bills.service';
import { DialogBillComponent } from '../dialog-bill/dialog-bill.component';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  public bills: Array<BillModel> = [];

  displayedColumns: string[] = ['description', 'amount', 'type', 'status','exclude-edit'];
  dataSource = new MatTableDataSource(this.bills);

  constructor(
    public billsService: BillsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.listBills();
  }

  public listBills(): void {
    this.billsService.getBills().subscribe(response => {
      console.log(response)
      this.bills = response;
    }, error => {

    });
  }

  public excludeBill(id: number): void {
    this.billsService.deleteBill(id).subscribe(response => {
      this.listBills();
    }, error => {

    });
  }

  public openDialogBill(action: string, bill?: BillModel): void {
    console.log(bill)
    const dialogRef = this.dialog.open(DialogBillComponent, {
      maxWidth: '500px',
      maxHeight: '400px',
      data: {
        action: action,
        bill: bill,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.updateList){
        this.listBills();
      }
    });
  }

}
