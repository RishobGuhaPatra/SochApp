import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorTabPage } from './counsellor-tab.page';

describe('CounsellorTabPage', () => {
  let component: CounsellorTabPage;
  let fixture: ComponentFixture<CounsellorTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounsellorTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellorTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
