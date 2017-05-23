import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { WeatherDetails } from '../weather/weather';

@Injectable()
export class WeatherService {
  result$: Observable<string>;
  key = '6ba9fe7b01ace29efd87f6336dcd299b';
  zip = '30309';
  //const url = `http://api.openweathermap.org/data/2.5/weather?zip=15108,us&appid=${this.key}`;

  constructor(private http: Http) { }

  getWeather(zip: string){}

}
