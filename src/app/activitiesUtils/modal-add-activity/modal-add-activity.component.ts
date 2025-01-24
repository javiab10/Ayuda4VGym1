import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormAddActivityComponent } from "../form-add-activity/form-add-activity.component";
import { Activity } from '../../models/activity';

@Component({
  selector: 'app-modal-add-activity',
  imports: [FormAddActivityComponent],
  templateUrl: './modal-add-activity.component.html',
  styleUrl: './modal-add-activity.component.scss'
})
export class ModalAddActivityComponent {
  @Input() idModal = '';
  @Input() date: Date = new Date();
  @Input() startingTime: string = '';
  @Input() endingTime: string = '';

  @Output() activityAddedEmiter = new EventEmitter<void>();

  ngOnInit(): void {
    console.log('idModal: ' + this.idModal);
    console.log('startingTime: ' + this.startingTime);
  }

  onActivityAdded(): void {
    this.activityAddedEmiter.emit(); // Notificamos al activity-card de que hemos creado una nueva actividad
  }
}
