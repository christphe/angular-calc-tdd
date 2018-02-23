import { TestBed, inject } from '@angular/core/testing';

import { CalcService } from './calc.service';

import { AddService } from './operations/add.service';
import { MultiplyService } from './operations/multiply.service';
import { SubstractService } from './operations/substract.service';

const addServiceMock = jasmine.createSpyObj('AddService', ['calc']);
const multiplyServiceMock = jasmine.createSpyObj('MultiplyService', ['calc']);
const substractServiceMock = jasmine.createSpyObj('SubstractService', ['calc']);

describe('CalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CalcService,
        { provide: AddService, useValue: addServiceMock },
        { provide: MultiplyService, useValue: multiplyServiceMock },
        { provide: SubstractService, useValue: substractServiceMock }
      ]
    });
  });

  it('should be created', inject([CalcService], (service: CalcService) => {
    expect(service).toBeTruthy();
  }));

  it('should return value from add service when operator is +', inject([CalcService], (service: CalcService) => {
    // given
    addServiceMock.calc.and.returnValue(1337);

    // when
    const result = service.calc('+', 2, 2);

    // then
    expect(addServiceMock.calc).toHaveBeenCalled();
    expect(result).toEqual(1337);
  }));

  it('should return value from multiply service when operator is *', inject([CalcService], (service: CalcService) => {
    // given
    multiplyServiceMock.calc.and.returnValue(42);

    // when
    const result = service.calc('*', 2, 2);

    // then
    expect(multiplyServiceMock.calc).toHaveBeenCalled();
    expect(result).toEqual(42);
  }));

  it('should return value from substract service when operator is -', inject([CalcService], (service: CalcService) => {
    // given
    substractServiceMock.calc.and.returnValue(421);

    // when
    const result = service.calc('-', 2, 2);

    // then
    expect(multiplyServiceMock.calc).toHaveBeenCalled();
    expect(result).toEqual(421);
  }));

  it('should throw error if operator is unknown', inject([CalcService], (service: CalcService) => {
    // when
    try {
      const result = service.calc('unknown', 2, 2);
      fail('should have thrown error');
    } catch (error) {
      expect(error.message).toEqual('Unknown operator unknown');
    }
  }));
});
