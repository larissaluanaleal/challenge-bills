import { of } from 'rxjs';
import { BillsComponent } from './bills.component';

describe('BillsComponent', () => {
  function setup() {
    const billsService = jasmine.createSpyObj('billsService', ['getBills', 'deleteBill']);
    const dialog = jasmine.createSpyObj('dialog', ['open', 'afterClosed']);

    const component = new BillsComponent(billsService, dialog)
    return {
      component,
      billsService,
      dialog,
    }
  }

  describe('#listBills', () => {
    it('should successfully list accounts when called', () => {
      const {
        component,
        billsService
      } = setup();

      const data = [{
        description: "Salário",
        amount: 9500.1,
        type: "C",
        status: true,
        id: 2
      }];

      billsService.getBills.and.returnValue(of(data));
      component.listBills();

      expect(billsService.getBills).toHaveBeenCalled();
      expect(component.dataSource.data).toBeDefined();
      expect(component.dataSource.data).toBe(data);
    });
  });

  describe('#excludeBill', () => {
    it('should call deleteBill and update bills list successfully when called ', () => {
      const {
        component,
        billsService
      } = setup();

      const data = [{
        description: "Salário",
        amount: 9500.1,
        type: "C",
        status: true,
        id: 2
      }];

      billsService.deleteBill.and.returnValue(of({}));
      billsService.getBills.and.returnValue(of(data));
      component.excludeBill(1);

      expect(billsService.deleteBill).toHaveBeenCalled();
      expect(billsService.getBills).toHaveBeenCalled();
      expect(component.dataSource.data).toBeDefined();
      expect(component.dataSource.data).toBe(data);
    });
  });

  describe('#resetAndListBills', () => {
    it('should reset status filter field to empty text and update bills list when called ', () => {
      const {
        component,
        billsService
      } = setup();

      component.filters.status = 'abc';
      component.filters.type = 'C';

      const data = [{
        description: "Salário",
        amount: 9500.1,
        type: "C",
        status: true,
        id: 2
      }];

      billsService.getBills.and.returnValue(of(data));
      component.resetAndListBills();

      expect(component.filters.status).toBe('');
      expect(component.filters.type).toBe('C');
      expect(billsService.getBills).toHaveBeenCalled();
      expect(component.dataSource.data).toBeDefined();
      expect(component.dataSource.data).toBe(data);
    });
  });

  describe('#filter', () => {
    it('should filter content by description in the table when called ', () => {
      const {
        component
      } = setup();

      const data = [
        {
          description: "Salário",
          amount: 9500.1,
          type: "C",
          status: true,
          id: 2
        },
        {
          description: "Energia",
          amount: 200.65,
          type: "D",
          status: true,
          id: 2
        }
      ];

      const event = {
        target: {
          value: 'Salário'
        }
      }

      component.dataSource.data = data;
      component.filter(event);
      expect(component.dataSource.data).toBeDefined();
      expect(component.dataSource.filter).toBe('salário');
    });
  });

  describe('#filter', () => {
    it('should filter the content by value by formatting the comma and dot when called', () => {
      const {
        component
      } = setup();

      const data = [
        {
          description: "Salário",
          amount: 9500.1,
          type: "C",
          status: true,
          id: 2
        },
        {
          description: "Energia",
          amount: 200.65,
          type: "D",
          status: true,
          id: 2
        }
      ];

      const event = {
        target: {
          value: '200,65'
        }
      }

      component.dataSource.data = data;
      component.filter(event);
      expect(component.dataSource.data).toBeDefined();
      expect(component.dataSource.filter).toBe('200.65');
    });
  });

  describe('#resetSelectStatus', () => {
    it('should reset status field to empty string when called', () => {
      const {
        component
      } = setup();

      component.filters.status = 'teste';
      component.resetSelectStatus();
      expect(component.filters.status).toBe('');
    });
  });
});
