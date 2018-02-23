import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcPageComponent } from './calc-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CalcPageComponent', () => {
  let component: CalcPageComponent;
  let fixture: ComponentFixture<CalcPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcPageComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
