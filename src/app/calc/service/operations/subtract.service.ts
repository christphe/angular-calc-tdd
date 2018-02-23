import { Injectable } from '@angular/core';
import { OperationService } from '../operation.service.interface';

@Injectable()
export class SubtractService implements OperationService {

  constructor() {
  }

  calc(a: number, b: number): number {
    return a - b;
  }
}
