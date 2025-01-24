import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MonitorService } from '../../services/monitor.service';
import { Monitor } from '../../models/monitor';

@Component({
  selector: 'app-form-add-monitor',
  imports: [ReactiveFormsModule],
  templateUrl: './form-add-monitor.component.html',
  styleUrl: './form-add-monitor.component.scss'
})
export class FormAddMonitorComponent {
  monitors: Monitor[] = [];
  monitorAddForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required])
  });
  
  constructor(private monitorService: MonitorService) {}

  ngOnInit(): void {
    this.loadMonitors();
  }

  ngOnChanges(): void{
    this.loadMonitors();
  }

  loadMonitors() {
    this.monitorService.getMonitors().subscribe(data => {
      this.monitors = data
    });
  }

  onSubmit() {
    if(this.monitorAddForm!.valid){
      const newMonitor = new Monitor(this.monitors.length + 1, this.monitorAddForm.get('name')?.value || '', this.monitorAddForm.get('email')?.value || '', this.monitorAddForm.get('phone')?.value || '');
      console.log("Nuevo Monitor a Crear: " + newMonitor);
      if(newMonitor){
        this.addMonitor(newMonitor);
        this.monitorAddForm.reset();
      }else{
        alert('Error al crear el monitor');
        this.monitorAddForm.reset();
      }

    }else{
      alert('Formulario no válido');
      this.monitorAddForm.reset();
    }
  }

  addMonitor(monitor: Monitor): void {
    if(monitor !== undefined){
      this.monitorService.addMonitor(monitor);
    }
  }
}
