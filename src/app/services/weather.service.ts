import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const appid = '6ba9fe7b01ace29efd87f6336dcd299b';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeather(){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=15108,us&appid='+appid+'').toPromise().then(response => response.json());
  }

}
