import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdetalleComponent } from './newdetalle.component';

describe('NewdetalleComponent', () => {
  let component: NewdetalleComponent;
  let fixture: ComponentFixture<NewdetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
