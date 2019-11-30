import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoListPage } from './proceso-list.page';

describe('ProcesoListPage', () => {
  let component: ProcesoListPage;
  let fixture: ComponentFixture<ProcesoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
