import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isActivitiesClicked: boolean = true;
  @Output() isActivitiesClickedEmiter = new EventEmitter<boolean>();

  onActivitiesClick(isActivitiesClicked: boolean){
    this.isActivitiesClicked = isActivitiesClicked;
    this.isActivitiesClickedEmiter.emit(this.isActivitiesClicked);
  }
}
