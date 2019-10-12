import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEditPage } from './perfil-edit.page';

describe('PerfilEditPage', () => {
  let component: PerfilEditPage;
  let fixture: ComponentFixture<PerfilEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
