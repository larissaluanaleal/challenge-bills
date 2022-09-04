import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BillModel } from '../models/bill.model';

@Injectable()
export class BillsService {

  readonly API_BILLS = "http://localhost:3000/bills";

  constructor(private http: HttpClient) { }

  public getBills(): Observable<Array<BillModel>> {
    return this.http.get<Array<BillModel>>(this.API_BILLS);
  }

  public postBill(data: BillModel): Observable<any> {
    return this.http.post<any>(this.API_BILLS, data);
  }

  public deleteBill(id: number): Observable<any> {
    const url = `${this.API_BILLS}/${id}`;
    return this.http.delete(url);
  }

  public putBill(data: BillModel): Observable<any> {
    const url = `${this.API_BILLS}/${data.id}`;
    return this.http.put(url, data);
  }
  
}
