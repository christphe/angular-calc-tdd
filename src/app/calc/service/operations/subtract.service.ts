import { Injectable } from '@angular/core';
import { OperationService } from '../operation.service.interface';

@Injectable()
export class SubtractService implements OperationService {
  constructor() { }

  subtract(a: number, b: number): number {
    return a - b;
  }

  calc(a: number, b: number): number {
    return this.subtract(a, b);
  }


}
