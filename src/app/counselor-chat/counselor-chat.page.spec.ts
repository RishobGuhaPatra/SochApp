import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselorChatPage } from './counselor-chat.page';

describe('CounselorChatPage', () => {
  let component: CounselorChatPage;
  let fixture: ComponentFixture<CounselorChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounselorChatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselorChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
