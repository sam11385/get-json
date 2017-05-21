import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsApiService {
  // https://newsapi.org/v1/sources
  // NEWS - API Key: 1e92dc106d5b4734b5e11c359c8eb0e4

  newsUrl: string;
  apiKey: string;


  constructor(private http: Http) {
    this.newsUrl = 'https://newsapi.org/v1';
    this.apiKey = '';
   }

   getSources(): Observable<any> {
     return this.http.get(`${this.newsUrl}/sources`)
     .map(response => response.json());
   }

   getArticles(source): Observable<any> {
     return this.http.get(`${this.newsUrl}/articles?source=${source}&apiKey=${this.apiKey}`)
     .map(response => response.json());
   }



}
