import { Component, OnInit } from '@angular/core';
import { CalcService } from './service/calc.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  public operator = '+';
  public a = 0;
  public b = 0;
  public result: number;

  constructor(private calcService: CalcService) { }

  ngOnInit() {
    this.calc();
  }

  calc() {
    this.result = this.calcService.calc(this.operator, this.a, this.b);
  }

  onChange() {
    this.calc();
  }
}
