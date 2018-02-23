import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';
import { FormsModule } from '@angular/forms';
import { CalcService } from './service/calc.service';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';

const calcServiceMock = jasmine.createSpyObj('CalcService', ['calc']);

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, NgbButtonsModule],
      providers: [
        { provide: CalcService, useValue: calcServiceMock }
      ],
      declarations: [CalcComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service calc when onChange', () => {
    // when
    component.onChange();

    // then
    expect(calcServiceMock.calc).toHaveBeenCalled();
  });
});
