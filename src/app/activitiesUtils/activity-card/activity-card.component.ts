import { Component, Input, } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { ActivityMonitorComponent } from "../activity-monitor/activity-monitor.component";
import { ActivityOfActivityComponent } from "../activity-of-activity/activity-of-activity.component";
import { ModalAddActivityComponent } from "../modal-add-activity/modal-add-activity.component";
import { ModalEditActivityComponent } from "../modal-edit-activity/modal-edit-activity.component";

@Component({
  selector: 'app-activity-card',
  imports: [ActivityMonitorComponent, ActivityOfActivityComponent, ModalAddActivityComponent, ModalEditActivityComponent],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.scss'
})
export class ActivityCardComponent {
  @Input() date: Date = new Date();
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
  
  loadActivity() {
    this.date = new Date(this.date); //Cuando recibimos la fecha del datepicker la recibimos como un string. Así que lo convertimos a fecha
    this.activity = this.activityService.getActivityByDateAndStartingTime(this.date, this.startingTime);
  }

  onDeleteActivity(id: number): void {
    this.activityService.deleteActivity(id);
    this.loadActivity();
  }

  onActivityAdded(): void {
    this.loadActivity();
  }

  

}

