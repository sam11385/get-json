import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Stocks } from '../stocks/stocks';

@Injectable()
export class StocksService {

  constructor(private http:Http) { }

  getStocks(){
    const symbol = 'dks';
    const stockUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
  }

}
