import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NewsApiService } from '../services/news-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': ''}
})
export class NewsComponent implements OnInit {

  articles = [];
  constructor(private _newsApiService: NewsApiService) { }

  ngOnInit() {
  }

}
