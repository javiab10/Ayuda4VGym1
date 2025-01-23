import { Injectable } from '@angular/core';
import { Monitor } from '../models/monitor';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private monitors: Monitor[] = [
    new Monitor(1, 'Miguel Goyena', 'miguel_goyena@cuatrovientos.org', '111111111'),
    new Monitor(2, 'Javier Gómez', 'javiGmz@gmail.com', '222222222'),
    new Monitor(3, 'Marta Pérez', 'marti04_Pz@yahoo.com', '333333333'),
    new Monitor(4, 'Ana López', 'acialapena@eduacion.navarra.es', '444444444'),
    new Monitor(5, 'Luisa García', 'luisssa@gmail.com', '555555555')
  ];

  constructor() { }

  getMonitors(): Observable<Monitor[]> {
    return of(this.monitors);
  }

  getMonitorsByName(name: string): Monitor[]{
    const monitorsByName: Monitor[] = [];
    for(const monitor of this.monitors ){
      if(monitor.name == name){
        monitorsByName.push(monitor);
      }
    }
    return (monitorsByName);
  }

  getMonitorById(monitorId: number){
    for(let monitor of this.monitors){
      if(monitor.id == monitorId){
        return monitor;
      }
    }
    return null;
  }

  addMonitor(monitor: Monitor): void {
    this.monitors.push(monitor);
  }

  deleteMonitor(id: number): void {
    this.monitors = this.monitors.filter(m => m.id !== id);
  }

  editMonitor(editedMonitor: Monitor): void {
    console.log('MOnitor a Editar Recibido: ', editedMonitor);
    const index = this.monitors.findIndex(m => m.id === editedMonitor.id);
    if(index !== -1){
      this.monitors[index] = editedMonitor;
    }
  }
}
