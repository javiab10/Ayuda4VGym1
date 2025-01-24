import { Component } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { FormAddActivityComponent } from "../activitiesUtils/form-add-activity/form-add-activity.component";
import { FechaComponent } from "../activitiesUtils/fecha/fecha.component";
import { FormsModule } from '@angular/forms';
import { ActivityCardComponent } from "../activitiesUtils/activity-card/activity-card.component";
import { ModalAddActivityComponent } from "../activitiesUtils/modal-add-activity/modal-add-activity.component";

@Component({
  selector: 'app-activities',
  imports: [CommonModule, FechaComponent, FormsModule, ActivityCardComponent, ModalAddActivityComponent],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {

  date: any = new Date();

  ngOnInit(){
    
  } 
  updateDate(newDate: any) {
    this.date = newDate;
  }
}
