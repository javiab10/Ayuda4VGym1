import { Component, Input } from '@angular/core';
import { MonitorService } from '../../services/monitor.service';

@Component({
  selector: 'app-activity-monitor',
  imports: [],
  templateUrl: './activity-monitor.component.html',
  styleUrl: './activity-monitor.component.scss'
})
export class ActivityMonitorComponent {
  @Input() monitorId: number = -1;
  monitor: any;

  constructor(private monitorService: MonitorService){}

  getMonitorName(){
    this.monitor = this.monitorService.getMonitorById(this.monitorId);
    if(this.monitor){
      return this.monitor.name;
    }
  }

}
