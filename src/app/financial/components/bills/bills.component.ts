import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { BillModel } from '../../models/bill.model';
import { BillsService } from '../../services/bills.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  public bills: Array<BillModel> = [];

  displayedColumns: string[] = ['description', 'amount', 'type', 'status'];
  dataSource = new MatTableDataSource(this.bills);

  constructor(public billsService: BillsService) { }

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

  public updateBill(data): void {
    this.billsService.putBill(data).subscribe(response => {

    }, error => {

    });
  }

  public excludeBill(): void {
    this.billsService.deleteBill(1).subscribe(response => {
      this.listBills();
    }, error => {

    });
  }

}
