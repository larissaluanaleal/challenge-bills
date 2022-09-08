export interface BillModel {
  id: number;
  description: string;
  amount: number;
  status: boolean;
  type: string;
}

export class FilterBills {
  public status: string = '';
  public type: string = '';
}