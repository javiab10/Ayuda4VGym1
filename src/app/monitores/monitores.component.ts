import { Component } from '@angular/core';
import { CarouselComponent } from "../monitoresUtils/carousel/carousel.component";
import { FormAddMonitorComponent } from "../monitoresUtils/form-add-monitor/form-add-monitor.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-monitores',
  imports: [CarouselComponent, FormAddMonitorComponent, ReactiveFormsModule],
  templateUrl: './monitores.component.html',
  styleUrl: './monitores.component.scss'
})
export class MonitoresComponent {
  busqueda: string = '';

  searchForm = new FormGroup({
      search: new FormControl('', )
  });

  onSubmit(){
    const newSearch: string = this.searchForm.get('search')?.value || '';
    this.busqueda = newSearch;
    console.log('Busqueda: ' + this.busqueda);
  }
}
