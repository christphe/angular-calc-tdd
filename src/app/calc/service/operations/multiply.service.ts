import { Injectable } from '@angular/core';
import { OperationService } from '../operation.service.interface';

@Injectable()
export class MultiplyService implements OperationService {

  constructor() { }

  multiply(a: number, b: number): number {
    return a * b;
  }

  calc(a: number, b: number): number {
    return this.multiply(a, b);
  }
}
