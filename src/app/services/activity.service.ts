import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  date: Date = new Date();
  private activities: Activity[] = [
    new Activity (1, "Spinning", 1, 0 , this.date, "10:00", "11:30"),
    new Activity (2, "Core", 1, 2, this.date, "17:30", "19:00")
  ];

  constructor() { }

  getActivities(): Observable<Activity[]> {
    return of(this.activities);
  }

  getActivityByDateAndStartingTime(date: Date, startingTime: string){
    for (let act of this.activities) {
      if (act.date.getDate() == date.getDate() && act.startingTime == startingTime) {
        return act;
      }
    }
    return null;
  }

  

  addActivity(activity: Activity): void {
      this.activities.push(activity);
  }

  deleteActivity(id: number): void {
      this.activities = this.activities.filter(m => m.id !== id);
    }
  
  editActivity(editedActivity: Activity): void {
    console.log('Actividad a Editar Recibido: ', editedActivity);
    const index = this.activities.findIndex(m => m.id === editedActivity.id);
    if(index !== -1){
      this.activities[index] = editedActivity;
    }
  }
}
