import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDrugsComponent } from './doctor-drugs.component';

describe('DoctorDrugsComponent', () => {
  let component: DoctorDrugsComponent;
  let fixture: ComponentFixture<DoctorDrugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDrugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
