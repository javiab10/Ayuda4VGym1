import { Injectable } from '@angular/core';
import { ActivityType } from '../models/activity-type';

@Injectable({
  providedIn: 'root'
})
export class ActivityTypeService {
  private activities: ActivityType[] = [
    new ActivityType(1, "Spinning", 1, 0, this.date, "10:00", "11:30"),
    new ActivityType(2, "Core", 1, 2, this.date, "17:30", "19:00")
  ];
  constructor() { }
}
