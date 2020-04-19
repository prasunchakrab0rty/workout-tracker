import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public images = [
    { src: 'assets/images/bike-1.png', title: 'Bike 1' },
    { src: 'assets/images/row-1.png', title: 'Row 1' },
    { src: 'assets/images/row-2.png', title: 'Row 2' },
    { src: 'assets/images/run-1.png', title: 'Run 1' }
  ];
  @ViewChild('imgCarousel', { static: false }) imgCarousel: any;

  constructor() { }

  ngOnInit() {
  }

  beforeChange($event) {
    console.log('before tab change', $event);
    if ($event.nextId === 'tabImages') {
      //$event.preventDefault();
    }
  }

  prev() {
    this.imgCarousel.prev();
  }

  next() {
    this.imgCarousel.next();
  }
}
