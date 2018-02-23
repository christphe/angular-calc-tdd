import { Injectable, Injector } from '@angular/core';
import { OperationService } from './operation.service.interface';

import { AddService } from './operations/add.service';
import { MultiplyService } from './operations/multiply.service';
import { SubstractService } from './operations/substract.service';

@Injectable()
export class CalcService {

  private serviceMap = new Map<string, OperationService>();

  constructor(injector: Injector) {
    this.initServiceMap(injector);
  }

  private initServiceMap(injector: Injector) {
    this.serviceMap.set('+', injector.get(AddService));
    this.serviceMap.set('*', injector.get(MultiplyService));
    this.serviceMap.set('-', injector.get(SubstractService));
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
