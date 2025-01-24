import { Injectable } from '@angular/core';
import { ActivityType } from '../models/activity-type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityTypeService {
  private activityTypes: ActivityType[] = [
    new ActivityType(1, "Spinning"),
    new ActivityType(2, "Core")
  ];
  constructor() { }

  getActivityTypeById(id: number): Observable<ActivityType[]> {
    for(let actType of this.activityTypes){
      if(actType.id == id){
        return of([actType]);
      }
    } 
    return of([]);
  }

  getActivityTypeByName(name: string): Observable<ActivityType[]> {
    for(let actType of this.activityTypes){
      if(actType.name == name){
        return of([actType]);
      }
    } 
    return of([]);
  }
}
