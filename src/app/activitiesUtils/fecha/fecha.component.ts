import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormatDatePipe } from "../../pipes/format-date.pipe";

@Component({
  selector: 'app-fecha',
  imports: [FormatDatePipe],
  templateUrl: './fecha.component.html',
  styleUrl: './fecha.component.scss'
})
export class FechaComponent {
  @Input() date: Date = new Date();
  @Output() dateChange = new EventEmitter<Date>();
  todayDate: Date = new Date();

  ngOnChanges(){
    
  }
  prevDate(){
    this.date = new Date(this.date);
    this.date = new Date(this.date.getTime());
    this.date.setDate(this.date.getDate()-1);

    this.dateChange.emit(this.date);
  }

  nextDate(){
    this.date = new Date(this.date);
    this.date = new Date(this.date.getTime());
    this.date.setDate(this.date.getDate()+1);

    this.dateChange.emit(this.date);
  }
}
