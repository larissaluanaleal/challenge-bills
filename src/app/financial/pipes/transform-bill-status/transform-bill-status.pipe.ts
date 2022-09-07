import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformBillStatus'
})
export class TransformBillStatusPipe implements PipeTransform {

  transform(status: boolean, typeBill: string): any {
    if (status) {
      return typeBill == "C" ? "Recebido" : "Pago";
    } else {
      return "Pendente"
    }
  }

}
