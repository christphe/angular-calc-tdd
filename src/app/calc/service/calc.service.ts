import { Injectable } from '@angular/core';
import { OperationService } from './operation.service.interface';

import { AddService } from './operations/add.service';
import { MultiplyService } from './operations/multiply.service';

@Injectable()
export class CalcService {

  private serviceMap = new Map<string, OperationService>();

  constructor(
    addService: AddService,
    multiplyService: MultiplyService) {
    this.serviceMap.set('+', addService);
    this.serviceMap.set('*', multiplyService);
  }

  calc(operator: string, a: number, b: number) {
    const operation = this.getOperation(operator);
    return operation.calc(a, b);
  }

  getOperation(operator: string): OperationService {
    const operation = this.serviceMap.get(operator);
    if (operation === undefined) {
      throw new Error(`Unknown operator ${operator}`);
    }
    return operation;
  }

}
