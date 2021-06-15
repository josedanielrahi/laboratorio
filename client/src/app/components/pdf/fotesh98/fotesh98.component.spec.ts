import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOTESH98Component } from './fotesh98.component';

describe('FOTESH98Component', () => {
  let component: FOTESH98Component;
  let fixture: ComponentFixture<FOTESH98Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOTESH98Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOTESH98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
