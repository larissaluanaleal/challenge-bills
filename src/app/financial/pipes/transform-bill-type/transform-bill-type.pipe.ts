import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformBillType'
})
export class TransformBillTypePipe implements PipeTransform {

  transform(value: any): any {
    switch (value) {
      case "D":
        return "Débito";
      case "C":
        return "Crédito";
      default:
        return "";
    }
  }

}