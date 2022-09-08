import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { BillModel, FilterBills } from '../../models/bill.model';
import { BillsService } from '../../services/bills.service';
import { DialogBillComponent } from '../dialog-bill/dialog-bill.component';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  public bills: Array<BillModel> = [];
  public filters: FilterBills = new FilterBills();

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
    this.billsService.getBills(this.filters).subscribe(response => {
      this.dataSource.data = response;
    }, error => {

    });
  }

  public resetAndListBills(): void {
    this.resetSelectStatus();
    this.listBills();
  }

  public excludeBill(id: number): void {
    this.billsService.deleteBill(id).subscribe(response => {
      this.listBills();
    }, error => {

    });
  }

  public openDialogBill(action: string, bill?: BillModel): void {
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

  public filter(event): void {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase().replace('.','').replace(',','.');
  }

  public resetSelectStatus(): void {
    this.filters.status = '';
  }

}
