import { FilterBills } from './../models/bill.model';
import { of, throwError } from 'rxjs';
import { BillsService } from './bills.service';

describe('Service: Bills', () => {

  function setup() {
    const http = jasmine.createSpyObj('http', ['get', 'put', 'post', 'delete']);

    const service = new BillsService(http);

    return {
      service,
      http,
    }
  }

  it('should be create', ()=> {
    const {
      service
    } = setup();
    expect(service).toBeTruthy();
  });

  describe("#getBills",()=> {
    it('should return data successfully', ()=> {
      const {
        service,
        http
      } = setup();

      const data = [{
        description: "Salário",
        amount: 9500.1,
        type: "C",
        status: true,
        id: 2
      }];

      http.get.and.returnValue(of(data));
      service.getBills().subscribe(res => {
        expect(res).toBeDefined();
        expect(res).toBe(data);
      },(error) => {
        expect(error).toBeUndefined();
      });

    });

    it('error should be set when http call returns an error', ()=> {
      const {
        service,
        http
      } = setup();

      http.get.and.returnValue(throwError({}));

      service.getBills().subscribe(res => {
        expect(res).toBeUndefined();
      },(error) => {
        expect(error).toBeDefined();
      });

    });
  });

  describe("#createUrlFilter",()=> {
    it('should create url with query string when called passing filters', ()=> {
      const {
        service
      } = setup();

      const filters: FilterBills = {
        status:'',
        type: 'C'
      }
      const urlExpect: string = `${service.API_BILLS}?type=C&`;
      const urlTest = service.createUrlFilter(filters, service.API_BILLS);
      expect(urlTest).toBe(urlExpect);
    });
  });

});
