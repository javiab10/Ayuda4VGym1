import { Component, Input} from '@angular/core';
import { Monitor } from '../../models/monitor';
import { MonitorService } from '../../services/monitor.service';
import { FormEditMonitorComponent } from "../form-edit-monitor/form-edit-monitor.component";

@Component({
  selector: 'app-carousel',
  imports: [FormEditMonitorComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  monitors: Monitor[] = [];
  selectedMonitor: Monitor | null = null;
  @Input() busqueda: string = '';
  searchedMonitors: Monitor[] = [];

  id: number = -1;
  index: number = 0;

  constructor(private monitorService: MonitorService) { }

  ngOnInit(): void {
    this.loadMonitors();
  }

  ngOnChanges(): void {
    this.loadMonitors();
  }

  get visibleMonitores(){
    return this.monitors.slice(this.index, this.index + 3);
  }

  next() {
    if(this.index + 3 < this.monitors.length){
      this.index++;
    }
  }

  prev() {
    if(this.index > 0){
      this.index--;
    }
  }
  
  loadMonitors() {
    this.monitorService.getMonitors().subscribe(data => {
      this.monitors = data
    });
  }

  getMonitorsByName(busqueda: string) {
    // this.searchedMonitors.push(this.monitorService.getMonitorsByName(busqueda));
  }

  onDeleteMonitor(id: number): void {
    this.monitorService.deleteMonitor(id);
    this.loadMonitors();
  }

  onSelectedMonitor(monitor: Monitor): void {
    this.selectedMonitor = monitor;
    console.log('Monitor seleccionado:', monitor);
  }

}
