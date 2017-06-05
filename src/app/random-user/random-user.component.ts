import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css'],
})
export class RandomUserComponent implements OnInit {
  private users = [];
  private images = [];
  constructor(http: Http) {
    http.get('https://randomuser.me/api/?results=20').map((data) => data.json())
      .subscribe((data) => {
        for (let i = 0; i < data.results.length; i++) {
          this.users.push(data.results[i]);
        }
      });
  }
  ngOnInit() {
  }
}
