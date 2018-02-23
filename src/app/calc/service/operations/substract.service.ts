import { Injectable } from '@angular/core';
import { OperationService } from '../operation.service.interface';

@Injectable()
export class SubstractService implements OperationService {
  constructor() { }

  substract(a: number, b: number): number {
    return a - b;
  }

  calc(a: number, b: number): number {
    return this.substract(a, b);
  }


}
