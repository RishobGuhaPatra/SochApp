import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCounselorPage } from './rate-counselor.page';

describe('RateCounselorPage', () => {
  let component: RateCounselorPage;
  let fixture: ComponentFixture<RateCounselorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateCounselorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateCounselorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
