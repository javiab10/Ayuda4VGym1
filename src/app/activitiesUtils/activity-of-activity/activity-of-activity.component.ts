import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-of-activity',
  imports: [],
  templateUrl: './activity-of-activity.component.html',
  styleUrl: './activity-of-activity.component.scss'
})
export class ActivityOfActivityComponent {
  @Input() activityType: string = '';
}
