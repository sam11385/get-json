import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.scss'],
  providers: [FlickrService]
})
export class FlickrComponent implements OnInit {

  searchControl = new FormControl();
  model$: Observable<any>;
  photos: Object;
  constructor(private _formBuilder: FormBuilder, private _flickrService: FlickrService) {
  }

  ngOnInit() {
    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((query: string) => this._flickrService.getResult(query))
      .subscribe(value => {
        this.photos = value;
      });
  }

}
