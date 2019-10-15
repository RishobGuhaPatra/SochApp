import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorSettingPage } from './counsellor-setting.page';

describe('CounsellorSettingPage', () => {
  let component: CounsellorSettingPage;
  let fixture: ComponentFixture<CounsellorSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounsellorSettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
