import { Component, Input } from '@angular/core';
import { FormEditActivityComponent } from "../form-edit-activity/form-edit-activity.component";

@Component({
  selector: 'app-modal-edit-activity',
  imports: [FormEditActivityComponent],
  templateUrl: './modal-edit-activity.component.html',
  styleUrl: './modal-edit-activity.component.scss'
})
export class ModalEditActivityComponent {
  @Input() activity: any;


}
