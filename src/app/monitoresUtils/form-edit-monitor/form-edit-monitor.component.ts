import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Monitor } from '../../models/monitor';
import { MonitorService } from '../../services/monitor.service';

@Component({
  selector: 'app-form-edit-monitor',
  imports: [ReactiveFormsModule],
  templateUrl: './form-edit-monitor.component.html',
  styleUrl: './form-edit-monitor.component.scss'
})
export class FormEditMonitorComponent {
  @Input() monitor!: Monitor;

  monitorEditForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required])
  });

  constructor(private monitorService: MonitorService) { }
  
  get id(){
    if(this.monitor){
      return this.monitor.id;
    }
    return null;
  }
  get number() {
    return this.monitorEditForm.get('number');
  }
  get email() {
    return this.monitorEditForm.get('email');
  }
  get message() {
    return this.monitorEditForm.get('phone');
  }

  ngOnInit() {
    console.log('Monitor recibido', this.monitor); // Verificamos si el objeto se recibe correctamente
  }


  onSubmit(): void {
    if(this.monitorEditForm.valid){
      const editedMonitor = new Monitor(this.monitor.id, this.monitorEditForm.get('name')?.value || '', this.monitorEditForm.get('email')?.value || '', this.monitorEditForm.get('phone')?.value || '');
      
      if(editedMonitor){
        this.monitorService.editMonitor(editedMonitor);
      }else{
        alert('Error al editar el monitor');
        this.monitorEditForm.reset();
      }
      
      this.monitorEditForm.reset();
    }else{
      alert('Formulario no válido');
      this.monitorEditForm.reset();
    } 
      
  }

}
