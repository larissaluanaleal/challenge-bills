import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformBillType'
})
export class TransformBillTypePipe implements PipeTransform {

  transform(typeBill: any): any {
    switch (typeBill) {
      case "D":
        return "Pagar";
      case "C":
        return "Receber";
      default:
        return "";
    }
  }

}
