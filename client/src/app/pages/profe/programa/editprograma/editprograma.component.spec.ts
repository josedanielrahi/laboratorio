import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprogramaComponent } from './editprograma.component';

describe('EditprogramaComponent', () => {
  let component: EditprogramaComponent;
  let fixture: ComponentFixture<EditprogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprogramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
