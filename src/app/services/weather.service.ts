import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {WeatherModel, WeatherDetails, WeatherInfo } from '../weather/weather';

const appid = '6ba9fe7b01ace29efd87f6336dcd299b';

@Injectable()
export class WeatherService {

  constructor(private http: Http) {
  }
  getWeather(zip):Promise<WeatherModel>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?zip='+zip+',us&appid='+appid+'').toPromise().then(response => response.json() as WeatherModel);
  }

}
