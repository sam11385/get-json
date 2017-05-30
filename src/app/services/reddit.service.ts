import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from '../reddit/post';

@Injectable()
export class RedditService {

  constructor(private jsonp:Jsonp) { }

  fetchPosts(subreddit:string): Observable<Post[]>{
    //https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&tags=${query}&per_page=12&format=json&nojsoncallback=1
    //return this.jsonp.get(`https://www.reddit.com/${subreddit}/.json?jsonp=JSONP_CALLBACK`).map(data => {
    return this.jsonp.get("https://www.reddit.com/"+subreddit+"/.json?jsonp=JSONP_CALLBACK").map(data => {      
    //return this.jsonp.get(`https://www.reddit.com/r/arsenal/.json?jsonp=JSONP_CALLBACK`).map(data => {  
        const posts: Post[] = [];
        const children = data.json().data.children;
        for (let i = 0; i < children.length; i++) {
          const post: Post = new Post();
          post.title = children[i].data.title;
          post.url = children[i].data.url;
          posts.push(post);
        }
        return posts;
    });
  }

}