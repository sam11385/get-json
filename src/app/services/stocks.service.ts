import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Stocks } from '../stocks/stocks';

@Injectable()
export class StocksService {

  constructor(private jsonp: Jsonp) { }
  getStocks(symbol):Observable<Stocks>{
    const stockUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=AAPL&callback=JSONP_CALLBACK';
    return this.jsonp.get(stockUrl)
                    .map(response => response.json() as Stocks);
  }

}