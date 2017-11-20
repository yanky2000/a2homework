import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})

export class WeatherDetailsComponent {

  @Input()
  public hotel: Hotel;

  public weather_pic = `${environment.imagePath}wi.png`;

}
