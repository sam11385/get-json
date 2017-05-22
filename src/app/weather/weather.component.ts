import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  // These details are straight from the JSON - picking out which ones we want to display
  temp: number;
  weatherness: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  response: string;

  constructor(private weather: WeatherService) {}
  
  ngOnInit() {
    console.log(this.response);
  }

}
