import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StocksService } from '../services/stocks.service';
import { Stocks } from './stocks';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  
  theStocks: Stocks;

  constructor(private stocks: StocksService) {
    console.log();
  }

  ngOnInit() {
    const dks = 'DKS';
    this.stocks.getStocks(dks)
                .subscribe(response => this.theStocks = response);
  }

}
