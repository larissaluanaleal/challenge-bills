export interface BillModel {
  id: string;
  description: string;
  amount: number;
  status: boolean;
  type: string;
}

export class FilterBills {
  public status: string = '';
  public type: string = '';
}