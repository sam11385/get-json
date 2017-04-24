import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { trigger, state, style, animate, group, transition } from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(350)
      ]),
      transition(':leave', [
        group([
          animate('0.2s ease', style({
            transform: 'translate(150px,25px)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})

export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
