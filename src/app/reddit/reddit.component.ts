import { Component, Input, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MyDataService } from './my-data.service';
import { Post } from './post';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.scss'],
  providers: [MyDataService]
})
export class RedditComponent implements OnInit {

  @Input('subreddit') subreddit:string;

  posts: Post[];

  constructor( private data: MyDataService ) {}

  ngOnInit() {
    this.data.fetchPosts(this.subreddit).subscribe(
      posts => this.posts = posts
    );
  }

}
