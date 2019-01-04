import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianBasicComponent } from './accordian-basic.component';

describe('AccordianBasicComponent', () => {
  let component: AccordianBasicComponent;
  let fixture: ComponentFixture<AccordianBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordianBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
