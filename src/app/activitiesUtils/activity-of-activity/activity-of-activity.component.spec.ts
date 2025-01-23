import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityOfActivityComponent } from './activity-of-activity.component';

describe('ActivityOfActivityComponent', () => {
  let component: ActivityOfActivityComponent;
  let fixture: ComponentFixture<ActivityOfActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityOfActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityOfActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
