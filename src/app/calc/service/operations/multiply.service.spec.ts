import { TestBed, inject } from '@angular/core/testing';

import { MultiplyService } from './multiply.service';

describe('MultiplyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiplyService]
    });
  });

  it('should be created', inject([MultiplyService], (service: MultiplyService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 4 when 2 and 2', inject([MultiplyService], (service: MultiplyService) => {
    expect(service.calc(2, 2)).toEqual(4);
  }));

  it('should return 0 when 2 and 0', inject([MultiplyService], (service: MultiplyService) => {
    expect(service.calc(2, 0)).toEqual(0);
  }));

});
