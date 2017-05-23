import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Observable } from 'rxjs/Observable';
import { WeatherDetails } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
