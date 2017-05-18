import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  // These details are straight from the JSON - picking out which ones we want to display
  temp: number;
  weatherness: number;
  humidity: number;
  temp_min: number;
  temp_max: number;

  constructor(private weather:WeatherService) { }

  ngOnInit() {
    console.log(this.weather.getWeather().then(response => this.temp = response));
  }

}
