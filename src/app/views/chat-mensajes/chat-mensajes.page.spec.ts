import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMensajesPage } from './chat-mensajes.page';

describe('ChatMensajesPage', () => {
  let component: ChatMensajesPage;
  let fixture: ComponentFixture<ChatMensajesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMensajesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMensajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
