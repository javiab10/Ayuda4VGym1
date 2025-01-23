import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivityService } from '../../services/activity.service';
import { Monitor } from '../../models/monitor';
import { MonitorService } from '../../services/monitor.service';
import { Activity } from '../../models/activity';

@Component({
  selector: 'app-form-edit-activity',
  imports: [],
  templateUrl: './form-edit-activity.component.html',
  styleUrl: './form-edit-activity.component.scss'
})
export class FormEditActivityComponent {
  @Input() activity!: any;
  monitors: Monitor[] = [];
  activities: Activity [] = [];

  // monitorEditForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   phone: new FormControl('', [Validators.required])
  // });

  constructor(private monitorService: MonitorService, private activityService: ActivityService) { }

  ngOnInit() {
    this.loadMonitors();
    this.loadActivity();
  }

  ngOnChanges() {
    this.loadMonitors();
    this.loadActivity();
  }

  loadMonitors() {
    this.activity = this.monitorService.getMonitors().subscribe(data => this.activity = data);
  }
  
  loadActivity() {
    this.activity = this.activityService.getActivities().subscribe(data => this.activity = data);
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

  // ngOnInit() {
  //   console.log('Activity recibida ' + this.activity); // Verifica si el objeto se recibe correctamente
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
