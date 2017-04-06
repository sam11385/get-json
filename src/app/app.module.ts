import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StravaComponent } from './strava/strava.component';
import { RandomUserComponent } from './random-user/random-user.component';
import { NewsComponent } from './news/news.component';
import { ZomatoComponent } from './zomato/zomato.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StravaComponent,
    RandomUserComponent,
    NewsComponent,
    ZomatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
