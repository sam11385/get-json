import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NytimesComponent } from './nytimes.component';

describe('NytimesComponent', () => {
  let component: NytimesComponent;
  let fixture: ComponentFixture<NytimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NytimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NytimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
