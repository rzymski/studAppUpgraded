import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintStudentComponent } from './print-student.component';

describe('PrintStudentComponent', () => {
  let component: PrintStudentComponent;
  let fixture: ComponentFixture<PrintStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
