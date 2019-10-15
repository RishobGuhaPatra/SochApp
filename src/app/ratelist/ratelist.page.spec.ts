import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateListPage } from './ratelist.page';

describe('RateListPage', () => {
  let component: RateListPage;
  let fixture: ComponentFixture<RateListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
