import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPmicComponent } from './doctor-pmic.component';

describe('DoctorPmicComponent', () => {
  let component: DoctorPmicComponent;
  let fixture: ComponentFixture<DoctorPmicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorPmicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPmicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
