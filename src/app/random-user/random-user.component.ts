import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {
  private users = [];
  private images = [];
  constructor(http: Http) {
    http.get('https://randomuser.me/api/?results=20').map((data) => data.json())
      .subscribe((data) => {
        for (let i = 0; i < data.results.length; i++) {
          // const authFirstName = data.results[i].name.first;
          // const authLastName = data.results[i].name.last;
          // const authFullName = authFirstName +' '+ authLastName;
          // const authImg = data.results[i].picture.large;
          this.users.push(data.results[i]);
          // this.images.push(authImg);
        }
      });
  }
  ngOnInit() {
  }
}
