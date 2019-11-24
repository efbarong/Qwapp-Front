import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercambioResumePage } from './intercambio-resume.page';

describe('IntercambioResumePage', () => {
  let component: IntercambioResumePage;
  let fixture: ComponentFixture<IntercambioResumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntercambioResumePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercambioResumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
