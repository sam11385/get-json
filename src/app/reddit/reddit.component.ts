import { Component, Input, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RedditService } from '../services/reddit.service';
import { Post } from './post';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.scss']
})
export class RedditComponent implements OnInit {

  @Input('subreddit') subreddit: string;

  posts: Post[];

  constructor( private data: RedditService ) {}

  ngOnInit() {
    this.data.fetchPosts(this.subreddit).subscribe(
      posts => this.posts = posts
    );
  }

}
