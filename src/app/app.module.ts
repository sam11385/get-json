import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StravaComponent } from './strava/strava.component';
import { RandomUserComponent } from './random-user/random-user.component';
import { NewsComponent } from './news/news.component';
import { ZomatoComponent } from './zomato/zomato.component';

const appRoutes: Routes = [
  { path: 'random-user', component: RandomUserComponent },
  { path: 'news', component: NewsComponent },
  { path: 'zomato', component: ZomatoComponent }
];

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
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
