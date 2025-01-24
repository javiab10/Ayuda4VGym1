import { Component, Input } from '@angular/core';
import { MonitorService } from '../../services/monitor.service';
import { ActivityTypeService } from '../../services/activity-type.service';
import { ActivityType } from '../../models/activity-type';
import { Monitor } from '../../models/monitor';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Activity } from '../../models/activity';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-form-add-activity',
  imports: [ReactiveFormsModule],
  templateUrl: './form-add-activity.component.html',
  styleUrl: './form-add-activity.component.scss'
})
export class FormAddActivityComponent {
  activityAddForm = new FormGroup({
    activityType: new FormControl('Actividad', [Validators.required]),
    monitor1: new FormControl('Monitor 1', [Validators.required]),
    monitor2: new FormControl('Monitor 2', [Validators.required])
  });
  activityType: ActivityType | null = null;
  @Input() date: Date = new Date();
  @Input() startingTime: string = '';
  @Input() endingTime: string = '';

  activityTypes: string[] = [];
  monitors: string[] = [];

  constructor(private activityTypeService: ActivityTypeService, private monitorService: MonitorService, private activityService: ActivityService){}

  ngOnInit(){
    this.getActivityTypes();
    this.getMonitors();
  }

  ngOnChanges(){
    this.getActivityTypes();
    this.getMonitors();
  }
  getActivityTypes(): void {
    this.activityTypeService.getActivityTypes().subscribe(activityTypes => {
      this.activityTypes = activityTypes.map((activityType: ActivityType) => activityType.name);
    });
  }

  getMonitors(): void {
    this.monitorService.getMonitors().subscribe(monitors => {
      this.monitors = monitors.map((monitor: Monitor) => monitor.name);
    });
  }

  getActivities():Activity[]{
    this.activityService.getActivities().subscribe(activities => {
      return activities;
    });
    return [];
  }

  onSubmit() {
    // const activities: Activity[] = this.getActivities();
    // if (this.activityAddForm!.valid) {
    //   const newActivity = new Activity(
    //     1, 
    //     this.activityType, 
    //     this.activityAddForm.get('monitor1')?.value || '', 
    //     this.activityAddForm.get('monitor2')?.value || '',
    //     this.date,
    //     this.startingTime,
    //     this.endingTime
    //   );

    //   console.log("Nuev Activity a Crear: " + newActivity);
      
    //   if (newActivity) { // Aquí van las condiciones
    //     this.addActivity(newActivity);
    //     this.activityAddForm.reset();
    //   } else {
    //     alert('Error al crear la actividad');
    //     this.activityAddForm.reset();
    //   }

    // } else {
    //   alert('Formulario no válido');
    //   this.activityAddForm.reset();
    // }
  }

  addActivity(activity: Activity): void {
    if (activity !== undefined) {
      this.activityService.addActivity(activity);
    }
  }

  getActivityTypeByName(){
    this.activityType = this.activityTypeService.getActivityTypeByName(this.activityAddForm.get('activityType')?.value || '');
  }

}
