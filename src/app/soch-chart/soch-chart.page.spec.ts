import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SochChartPage } from './soch-chart.page';

describe('SochChartPage', () => {
  let component: SochChartPage;
  let fixture: ComponentFixture<SochChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SochChartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SochChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
