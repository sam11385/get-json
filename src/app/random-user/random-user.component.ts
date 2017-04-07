import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {
  private users = [];
  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/users/')
    .flatMap((data) => data.json())
      .subscribe((data) => {
        this.users.push(data);
      });
  }

  ngOnInit() {
  }

}
