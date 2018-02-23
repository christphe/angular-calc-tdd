import { Injectable } from '@angular/core';
import { OperationService } from '../operation.service.interface';

@Injectable()
export class AddService implements OperationService {

  constructor() { }

  add(a: number, b: number): number {
    return a + b;
  }

  calc(a: number, b: number): number {
    return this.add(a, b);
  }
}
