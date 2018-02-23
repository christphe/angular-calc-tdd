import { TestBed, inject } from '@angular/core/testing';

import { CalcService } from './calc.service';

import { AddService } from './operations/add.service';
import { MultiplyService } from './operations/multiply.service';
import { SubtractService } from './operations/subtract.service';

let mocks = {
  AddService: undefined,
  MultiplyService: undefined,
  SubstractService: undefined
};

describe('CalcService', () => {
  beforeEach(() => {
    const providers: any[] = [CalcService];
    mocks = {
      AddService: registerOperatorMock(AddService),
      MultiplyService: registerOperatorMock(MultiplyService),
      SubstractService: registerOperatorMock(SubtractService)
    };
    TestBed.configureTestingModule({
      providers: providers
    });

    function registerOperatorMock(baseClass: any): any {
      const mock = jasmine.createSpyObj(baseClass.name, ['calc']);
      providers.push({
        provide: baseClass,
        useValue: mock
      });
      return mock;
    }
  });

  it('should be created', inject([CalcService], (service: CalcService) => {
    expect(service).toBeTruthy();
  }));

  it('should return value from add service when operator is +', inject([CalcService], (service: CalcService) => {
    // given

    const expectedResult = 145874545545418;
    mocks.AddService.calc.and.returnValue(expectedResult);

    // when
    const result = service.calc('+', 2, 2);

    // then
    expect(mocks.AddService.calc).toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  }));

  it('should return value from multiply service when operator is *', inject([CalcService], (service: CalcService) => {
    // given
    const expectedResult = 51265184512158855;
    mocks.MultiplyService.calc.and.returnValue(expectedResult);

    // when
    const result = service.calc('*', 2, 2);

    // then
    expect(mocks.MultiplyService.calc).toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  }));

  it('should return value from subtract service when operator is -', inject([CalcService], (service: CalcService) => {
    // given
    const expectedResult = 226584521032188;
    mocks.SubstractService.calc.and.returnValue(expectedResult);

    // when
    const result = service.calc('-', 2, 2);

    // then
    expect(mocks.SubstractService.calc).toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  }));

  it('should throw error if operator is unknown', inject([CalcService], (service: CalcService) => {
    // when
    try {
      service.calc('unknown', 2, 2);
      fail('should have thrown error');
    } catch (error) {
      expect(error.message).toEqual('Unknown operator unknown');
    }
  }));
});
