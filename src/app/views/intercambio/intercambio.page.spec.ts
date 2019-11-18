import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercambioPage } from './intercambio.page';

describe('IntercambioPage', () => {
  let component: IntercambioPage;
  let fixture: ComponentFixture<IntercambioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntercambioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercambioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
