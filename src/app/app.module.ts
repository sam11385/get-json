import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StravaComponent } from './strava/strava.component';
import { RandomUserComponent } from './random-user/random-user.component';
import { NewsComponent } from './news/news.component';
import { ZomatoComponent } from './zomato/zomato.component';
import { CarsComponent } from './cars/cars.component';
import { NytimesComponent } from './nytimes/nytimes.component';
import { WeatherComponent } from './weather/weather.component';
import { StocksComponent } from './stocks/stocks.component';
import { UntappdComponent } from './untappd/untappd.component';
import { TvComponent } from './tv/tv.component';
import { RedditComponent } from './reddit/reddit.component';

import { NewsApiService } from './services/news-api.service';
import { FlickrComponent } from './flickr/flickr.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: FlickrComponent},
  { path: 'random-user', component: RandomUserComponent },
  { path: 'news', component: NewsComponent },
  { path: 'zomato', component: ZomatoComponent },
  { path: 'reddit', component: RedditComponent },
  { path: 'flickr', component: FlickrComponent },
  { path: 'weather', component: WeatherComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StravaComponent,
    RandomUserComponent,
    NewsComponent,
    ZomatoComponent,
    CarsComponent,
    NytimesComponent,
    WeatherComponent,
    StocksComponent,
    UntappdComponent,
    TvComponent,
    RedditComponent,
    FlickrComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    JsonpModule,
    MaterialModule
  ],
  exports: [RouterModule],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const routedComponents = [RandomUserComponent, NewsComponent, ZomatoComponent, RedditComponent];
