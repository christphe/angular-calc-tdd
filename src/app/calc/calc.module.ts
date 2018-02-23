import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CalcComponent } from './calc.component';
import { AddService } from './service/operations/add.service';
import { CalcService } from './service/calc.service';
import { MultiplyService } from './service/operations/multiply.service';
import { RouterModule } from '@angular/router';
import { CALC_ROUTES } from './calc.route';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(CALC_ROUTES)
  ],
  providers: [
    AddService,
    MultiplyService,
    CalcService
  ],
  declarations: [
    CalcComponent
  ],
  exports: [
    CalcComponent
  ]
})
export class CalcModule { }