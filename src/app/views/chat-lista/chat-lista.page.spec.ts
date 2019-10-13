import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListaPage } from './chat-lista.page';

describe('ChatListaPage', () => {
  let component: ChatListaPage;
  let fixture: ComponentFixture<ChatListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatListaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
