import { TestBed, inject } from '@angular/core/testing';

import { RedditService } from './reddit.service';

describe('RedditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedditService]
    });
  });

  it('should ...', inject([RedditService], (service: RedditService) => {
    expect(service).toBeTruthy();
  }));
});
