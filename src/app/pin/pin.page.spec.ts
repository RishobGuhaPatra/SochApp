import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PINPage } from './pin.page';

describe('PINPage', () => {
  let component: PINPage;
  let fixture: ComponentFixture<PINPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PINPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PINPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
