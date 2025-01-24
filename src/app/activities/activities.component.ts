import { Component } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { FormAddActivityComponent } from "../activitiesUtils/form-add-activity/form-add-activity.component";
import { FechaComponent } from "../activitiesUtils/fecha/fecha.component";
import { FormsModule } from '@angular/forms';
import { ActivityCardComponent } from "../activitiesUtils/activity-card/activity-card.component";
import { ModalAddActivityComponent } from "../activitiesUtils/modal-add-activity/modal-add-activity.component";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-activities',
  imports: [CommonModule, FechaComponent, FormsModule, ActivityCardComponent, ModalAddActivityComponent, MatDatepickerModule, MatNativeDateModule, MatInputModule],
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
