import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditMonitorComponent } from './form-edit-monitor.component';

describe('FormEditMonitorComponent', () => {
  let component: FormEditMonitorComponent;
  let fixture: ComponentFixture<FormEditMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
