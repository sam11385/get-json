import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { StocksService } from '../../services/stocks.service';
import {Stocks} from '../stocks';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent {

  // theStocks: Stocks;

  // constructor(private http: Http, stocks: StocksService) { }

  // ngOnInit() {
  //   this.stocks.getStocks('dks')
  //               .subscribe(response => this.theStocks = response);
  // }

}
