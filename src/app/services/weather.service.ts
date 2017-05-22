import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  result$: Observable<any>;
  key = '6ba9fe7b01ace29efd87f6336dcd299b';

  constructor(private http: Http) { }

  getWeather(){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=15108,us&appid=' + this.key + '');
  }

}
