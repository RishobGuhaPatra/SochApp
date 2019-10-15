import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SochConnectPage } from './soch-connect.page';

describe('SochConnectPage', () => {
  let component: SochConnectPage;
  let fixture: ComponentFixture<SochConnectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SochConnectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SochConnectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
