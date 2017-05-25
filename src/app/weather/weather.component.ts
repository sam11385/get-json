import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Observable } from 'rxjs/Observable';
import { WeatherModel, WeatherDetails } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  theWeather: WeatherModel;

  constructor(private weather:WeatherService) {

  }

  ngOnInit() {
    this.weather.getWeather(30033).then(response => this.theWeather = response);
  }

}
