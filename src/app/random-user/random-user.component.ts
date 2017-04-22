import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {
  private users = [];
  constructor(http: Http) {
    http.get('https://randomuser.me/api/?results=20')
    .map((data) => data.json())
      .subscribe((data) => {
        for (let i = 0; i < data.results.length; i++) {
          const authFirstName = data.results[i].name.first;
          const authLastName = data.results[i].name.last;
          const authFullName = authFirstName +' '+ authLastName;
          this.users.push(authFullName);
        }
      });
  }
  ngOnInit() {
  }
}
