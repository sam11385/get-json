import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  //const symbol = 'dks';
  //const stockUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
  // http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=DKS

  constructor() { }

  ngOnInit() {
  }

}
