import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  activityType: ActivityType = new ActivityType(-1, '');
  @Input() date: Date = new Date();
  @Input() startingTime: string = '';
  @Input() endingTime: string = '';

  activityTypes: ActivityType[] = [];
  activities: Activity[] = [];
  monitors: Monitor[] = [];

  @Output() activityAddedEmiter = new EventEmitter<void>();

  constructor(private activityTypeService: ActivityTypeService, private monitorService: MonitorService, private activityService: ActivityService){}

  ngOnInit(){
    this.getActivityTypes();
    this.getActivities();
    this.getMonitors();
  }

  ngOnChanges(){
    this.getActivityTypes();
    this.getActivities();
    this.getMonitors();
  }
  getActivityTypes(): void {
    this.activityTypeService.getActivityTypes().subscribe(activityTypes => {
      this.activityTypes = activityTypes.map((activityType: ActivityType) => activityType);
    });
  }

  getMonitors(): void {
    this.monitorService.getMonitors().subscribe(monitors => {
      this.monitors = monitors.map((monitor: Monitor) => monitor);
    });
  }

  getActivities(){
    this.activityService.getActivities().subscribe(data => {
      this.activities = data
    });
  }

  onSubmit() {
    console.log('Cuantas activities: ' + this.activities.length);
    this.getActivityTypeByName();

    if (this.activityAddForm!.valid) {
      const newActivity = new Activity(
        this.activities.length + 1, 
        this.activityType, 
        this.getMonitorIdByName(this.activityAddForm.get('monitor1')?.value || ''),
        this.getMonitorIdByName(this.activityAddForm.get('monitor2')?.value || ''),
        this.date,
        this.startingTime,
        this.endingTime
      );
      
      if(this.activityAddForm.get('activityType')?.value == 'Actividad' ){
        alert('Debes elegir una actividad');
        this.resetForm();
        return;
      }

      if(this.activityAddForm.get('monitor1')?.value == 'Monitor 1' && this.activityAddForm.get('monitor2')?.value == 'Monitor 2'){
        alert('Debes elegir al menos un monitor');
        this.resetForm();
        return;
      }

      if(this.activityAddForm.get('monitor1')?.value == 'Monitor 1' && this.activityAddForm.get('monitor2')?.value != 'Monitor 2'){
        alert('Debes elegir el Monitor 1 antes de elegir el Monitor 2');
        this.resetForm();
        return;
      }


      if(newActivity.monitor1Id == newActivity.monitor2Id){
        alert('Los monitores no pueden ser iguales');
        this.resetForm();
        return;
      }

      if (newActivity) { 
        this.addActivity(newActivity);
        console.log('Nueva Actividad hora inicio: ' + newActivity.startingTime);
        this.activityAddedEmiter.emit(); // Notificamos al modal de que hemos creado una nueva actividad
        this.resetForm();
      } else {
        alert('Error al crear la actividad');
        this.resetForm();
      }

    } else {
      alert('Formulario no válido');
      this.activityAddForm.reset();
    }
  }

  addActivity(activity: Activity): void {
    if (activity !== undefined) {
      this.activityService.addActivity(activity);
    }
  }

  getActivityTypeByName(){
    this.activityType = this.activityTypeService.getActivityTypeByName(this.activityAddForm.get('activityType')?.value || '');
    console.log('Actividad elegida: ' + this.activityType.name);
  }

  getMonitorIdByName(monitorName: string): number{
    for(let monitor of this.monitors){
      if(monitor.name == monitorName){
        return monitor.id;
      }
    }
    return -1;
  }

  resetForm(){
    this.activityAddForm = new FormGroup({
      activityType: new FormControl('Actividad', [Validators.required]),
      monitor1: new FormControl('Monitor 1', [Validators.required]),
      monitor2: new FormControl('Monitor 2', [Validators.required])
    });
  }

}
