import { FilterBills } from './../models/bill.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BillModel } from '../models/bill.model';

@Injectable()
export class BillsService {

  readonly API_BILLS = "http://localhost:3000/bills";

  constructor(private http: HttpClient) { }

  public getBills(filter?: FilterBills): Observable<Array<BillModel>> {
    let url = this.API_BILLS;
    if (filter && (filter.status || filter.type)) {
      url = this.createUrlFilter(filter, url);
    }
    return this.http.get<Array<BillModel>>(url);
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

  public createUrlFilter(filter: FilterBills, url: string): string {
    url += `?`
    Object.keys(filter).forEach(key => {
      if (filter[key]) {
        url += `${key}=${filter[key]}&`;
      }
    });
    return url;
  }
}
