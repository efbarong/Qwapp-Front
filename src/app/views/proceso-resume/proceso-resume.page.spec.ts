import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoResumePage } from './proceso-resume.page';

describe('ProcesoResumePage', () => {
  let component: ProcesoResumePage;
  let fixture: ComponentFixture<ProcesoResumePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoResumePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoResumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
