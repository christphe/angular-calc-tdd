import { TestBed, inject } from '@angular/core/testing';

import { SubstractService } from './substract.service';

describe('SubstractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubstractService]
    });
  });

  it('should be created', inject([SubstractService], (service: SubstractService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 4 when 6 and 2', inject([SubstractService], (service: SubstractService) => {
    expect(service.calc(6, 2)).toEqual(4);
  }));

  it('should return -2 when 6 and 8', inject([SubstractService], (service: SubstractService) => {
    expect(service.calc(6, 8)).toEqual(-2);
  }));

  it('should return 0 when 0 and 0', inject([SubstractService], (service: SubstractService) => {
    expect(service.calc(0, 0)).toEqual(0);
  }));
});
