import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderDetailPage } from './uploaderdetail.page';

describe('UploaderDetailPage', () => {
  let component: UploaderDetailPage;
  let fixture: ComponentFixture<UploaderDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
