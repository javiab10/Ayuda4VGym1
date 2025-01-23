import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MonitoresComponent } from "./monitores/monitores.component";
import { ActivitiesComponent } from "./activities/activities.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MonitoresComponent, ActivitiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ayuda4VGym';
  isActivitiesClicked: boolean = true;

  getIsActivitiesClicked(isActivitiesClicked: boolean){
    this.isActivitiesClicked = isActivitiesClicked;
  }
}
