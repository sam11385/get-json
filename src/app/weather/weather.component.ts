import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Observable } from 'rxjs/Observable';
import { WeatherModel, WeatherDetails, WeatherInfo } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  theWeather: WeatherModel;

  constructor(private weather:WeatherService) { 
    // const temp = this.theWeather.main.temp;
    // function ToFahrenheit() {
    //   return (this.theWeather.main.temp - 273) * 9 / 5 + 32;
    // }
  }

  ngOnInit() {
    this.weather.getWeather(32738).subscribe(response => this.theWeather = response);
  }

}
