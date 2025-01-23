import { Component } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { FormAddActivityComponent } from "../activitiesUtils/form-add-activity/form-add-activity.component";
import { FechaComponent } from "../activitiesUtils/fecha/fecha.component";
import { FormsModule } from '@angular/forms';
import { ActivityCardComponent } from "../activitiesUtils/activity-card/activity-card.component";

@Component({
  selector: 'app-activities',
  imports: [CommonModule, FormAddActivityComponent, FechaComponent, FormsModule, ActivityCardComponent],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {

  date: any = new Date();
  
  updateDate(newDate: any) {
    console.log('fecha vieja:', this.date);
    this.date = newDate;
    console.log('Nueva fecha:', this.date);
  }
}
