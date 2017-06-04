import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Stocks } from '../stocks/stocks';

@Injectable()
export class StocksService {

  constructor(private http:Http) { }

  // getStocks(){
  //   const symbol = 'dks';
  //   const stockUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
  // }

  getStocks():Observable<Stocks[]> {
    return this.http.get('http://jsonplaceholder.typicode.com/posts/')
                    .map(this.extractData)
                    //.catch(this.handleError);
  }

  private extractData(res:Response) {
      let body = res.json();
      return body || [];
  }

    // private handleError(error:any) {
    //     // In a real world app, we might use a remote logging infrastructure
    //     // We'd also dig deeper into the error to get a better message
    //     let errMsg = (error.message) ? error.message :
    //         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //     console.error(errMsg); // log to console instead
    //     return Observable.throw(errMsg);
    // }

}

// let currentUserSubject = new BehaviorSubject<string>('Eric');
// let currentUser = currentUserSubject.asObservable();

// currentUserSubject.subscribe((val) => {
//     console.log(val)
// })
// // => 'Eric'

// currentUserSubject.next('hello');
// // => 'hello'
