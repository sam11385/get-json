import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { WeatherDetails } from '../weather/weather'

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeather() : Observable<string[]> {
       return this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=30309,us&appid=6ba9fe7b01ace29efd87f6336dcd299b')
                        .map((response: Response) => response.json())
   }

}