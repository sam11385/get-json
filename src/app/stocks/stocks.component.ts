import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { StocksService } from '../services/stocks.service';
import { Stocks } from './stocks';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  
  stocks: any;
  theStocks: Stocks;

  constructor(private http: Http, stocks: StocksService) { }

  ngOnInit() {
    const dks = 'dks';
    this.stocks.getStocks(dks)
                .subscribe(response => this.theStocks = response);
  }

}
