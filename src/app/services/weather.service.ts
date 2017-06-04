import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { WeatherModel, WeatherDetails, WeatherInfo, Sys } from '../weather/weather';

@Injectable()
export class WeatherService {

  constructor(private http: Http) {}
  getWeather(zip):Observable<WeatherModel>{
    const appid = '6ba9fe7b01ace29efd87f6336dcd299b';
    const url = 'http://api.openweathermap.org/data/2.5/weather?zip='+zip+',us&appid='+appid+'';
    return this.http.get(url)
                    .map(response => response.json() as WeatherModel);
  }

  

}