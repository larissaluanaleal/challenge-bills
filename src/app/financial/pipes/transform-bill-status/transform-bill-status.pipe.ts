import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformBillStatus'
})
export class TransformBillStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value, args)
    if (value) {
      return args == "C" ? "Recebido" : "Pago";
    } else {
      return "Pendente"
    }
  }

}
