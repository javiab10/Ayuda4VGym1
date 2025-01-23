import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddMonitorComponent } from './form-add-monitor.component';

describe('FormAddMonitorComponent', () => {
  let component: FormAddMonitorComponent;
  let fixture: ComponentFixture<FormAddMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
