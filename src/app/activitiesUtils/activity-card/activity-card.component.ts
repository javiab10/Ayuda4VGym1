import { Component, Input, } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { ActivityMonitorComponent } from "../activity-monitor/activity-monitor.component";
import { ActivityOfActivityComponent } from "../activity-of-activity/activity-of-activity.component";

@Component({
  selector: 'app-activity-card',
  imports: [ActivityMonitorComponent, ActivityOfActivityComponent],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.scss'
})
export class ActivityCardComponent {
  @Input() date: any = new Date();
  @Input() startingTime: string = '';
  @Input() endingTime: string = '';
  activity: any;

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.loadActivity();
  }

  ngOnChanges(): void {
    this.loadActivity();
  }

  // ngOnChanges(): void {
  //   this.loadActivity();
  // }
  
  loadActivity() {
    this.activity = this.activityService.getActivityByDateAndStartingTime(this.date, this.startingTime);
  }


}

