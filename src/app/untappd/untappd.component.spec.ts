import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UntappdComponent } from './untappd.component';

describe('UntappdComponent', () => {
  let component: UntappdComponent;
  let fixture: ComponentFixture<UntappdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UntappdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UntappdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
