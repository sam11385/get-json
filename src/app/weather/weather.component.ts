import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { WeatherModel, WeatherDetails, WeatherInfo, Sys } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  theWeather: WeatherModel;
  searchControl = new FormControl();

  constructor(private weather:WeatherService, private FormBuilder: FormBuilder) { 
    // const temp = this.theWeather.main.temp;
    // function ToFahrenheit() {
    //   return (this.theWeather.main.temp - 273) * 9 / 5 + 32;
    // }

    // const utcSeconds = this.theWeather.sys.sunrise;
    // const d = new Date(0);
    // d.setUTCSeconds(utcSeconds);
  }

  ngOnInit() {
    this.weather.getWeather(30309).subscribe(response => this.theWeather = response);
  }

}
