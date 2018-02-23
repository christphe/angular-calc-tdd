import { TestBed, inject } from '@angular/core/testing';

import { AddService } from './add.service';

describe('AddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddService]
    });
  });

  it('should be created', inject([AddService], (service: AddService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 4 when 2 and 2', inject([AddService], (service: AddService) => {
    expect(service.calc(2, 2)).toEqual(4);
  }));

  it('should return 8 when 6 and 2', inject([AddService], (service: AddService) => {
    expect(service.calc(6, 2)).toEqual(8);
  }));

  it('should return 5 when 7 and -2', inject([AddService], (service: AddService) => {
    expect(service.calc(7, -2)).toEqual(5);
  }));
});
