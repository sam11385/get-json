import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const appid = '6ba9fe7b01ace29efd87f6336dcd299b';

@Injectable()
export class WeatherService {

  // These details are straight from the JSON - picking out which ones we want to display
  temp: number;
  weather: number;
  humidity: number;
  temp_min: number;
  temp_max: number;

  constructor(private http: Http) { }

}
