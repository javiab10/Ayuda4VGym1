import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../../services/activity.service';
import { Monitor } from '../../models/monitor';
import { MonitorService } from '../../services/monitor.service';
import { Activity } from '../../models/activity';
import { ActivityTypeService } from '../../services/activity-type.service';
import { ActivityType } from '../../models/activity-type';

@Component({
  selector: 'app-form-edit-activity',
  imports: [],
  templateUrl: './form-edit-activity.component.html',
  styleUrl: './form-edit-activity.component.scss'
})
export class FormEditActivityComponent {
  @Input() activity!: any;
  activityTypes: ActivityType[] = [];
  activities: Activity[] = [];
  monitors: Monitor[] = [];

  activityEditForm = new FormGroup({
    activityType: new FormControl('Core', [Validators.required]),
    monitor1: new FormControl('Monitor 1', [Validators.required]),
    monitor2: new FormControl('Monitor 2', [Validators.required])
  });

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

  loadMonitors() {
    this.activity = this.monitorService.getMonitors().subscribe(data => this.activity = data);
  }
  
  loadActivity() {
    this.activity = this.activityService.getActivities().subscribe(data => this.activity = data);
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
  
  // get id(){
  //   if(this.activity){
  //     return this.activity.id;
  //   }
  //   return null;
  // }
  // get number() {
  //   return this.monitorEditForm.get('number');
  // }
  // get email() {
  //   return this.monitorEditForm.get('email');
  // }
  // get message() {
  //   return this.monitorEditForm.get('phone');
  // }


  // onSubmit(): void {
  //   if(this.monitorEditForm.valid){
  //     const editedMonitor = new Monitor(this.monitor.id, this.monitorEditForm.get('name')?.value || '', this.monitorEditForm.get('email')?.value || '', this.monitorEditForm.get('phone')?.value || '');
      
  //     console.log('Editando monitor: ', editedMonitor);
  //     if(editedMonitor){
  //       this.activityService.editMonitor(editedMonitor);
  //     }else{
  //       alert('Error al editar el monitor');
  //       this.monitorEditForm.reset();
  //     }
      
  //     this.monitorEditForm.reset();
  //   }else{
  //     alert('Formulario no válido');
  //     this.monitorEditForm.reset();
  //   } 
      
  // }

}
