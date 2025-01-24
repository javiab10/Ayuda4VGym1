import { Component, Input } from '@angular/core';
import { FormAddActivityComponent } from "../form-add-activity/form-add-activity.component";

@Component({
  selector: 'app-modal-add-activity',
  imports: [FormAddActivityComponent],
  templateUrl: './modal-add-activity.component.html',
  styleUrl: './modal-add-activity.component.scss'
})
export class ModalAddActivityComponent {
  @Input() date: Date = new Date();
  @Input() startingTime: string = '';
  @Input() endingTime: string = '';
}
