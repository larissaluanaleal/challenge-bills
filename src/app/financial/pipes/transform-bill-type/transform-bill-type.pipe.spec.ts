import { TransformBillTypePipe } from './transform-bill-type.pipe';

describe('Pipe: TransformBillTypee', () => {
  it('create an instance', () => {
    let pipe = new TransformBillTypePipe();
    expect(pipe).toBeTruthy();
  });

  it("should transforms 'D' to 'Débito'", () => {
    let pipe = new TransformBillTypePipe();
    expect(pipe.transform('D')).toBe('Pagar');
  });

  it("should transforms 'C' to 'Crédito'", () => {
    let pipe = new TransformBillTypePipe();
    expect(pipe.transform('C')).toBe('Receber');
  });

  it("should transforms 'A' to '' ", () => {
    let pipe = new TransformBillTypePipe();
    expect(pipe.transform('A')).toBe('');
  });
});
