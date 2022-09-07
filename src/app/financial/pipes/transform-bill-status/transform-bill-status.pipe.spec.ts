import { TransformBillStatusPipe } from './transform-bill-status.pipe';

describe('Pipe: TransformBillStatus', () => {
    it('create an instance', () => {
      let pipe = new TransformBillStatusPipe();
      expect(pipe).toBeTruthy();
    });
  
    it("should transforms status true and type bill 'C' to 'Recebido'", () => {
      let pipe = new TransformBillStatusPipe();
      expect(pipe.transform(true, 'C')).toBe('Recebido');
    });
  
    it("should transforms status true and type bill 'D' to 'Pago'", () => {
      let pipe = new TransformBillStatusPipe();
      expect(pipe.transform(true, 'D')).toBe('Pago');
    });
  
    it("should transforms status false and type bill 'D' to 'Pendente'", () => {
      let pipe = new TransformBillStatusPipe();
      expect(pipe.transform(false, 'D')).toBe('Pendente');
    });

    it("should transforms status false and type bill 'C' to 'Pendente'", () => {
      let pipe = new TransformBillStatusPipe();
      expect(pipe.transform(false, 'C')).toBe('Pendente');
    });
});
