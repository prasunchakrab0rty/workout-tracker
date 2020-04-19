import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public stepComplete = 1;
  @ViewChild('acc', { static: true }) acc: any;

  constructor() { }

  ngOnInit() {
  }
  onNext(id) {
    this.stepComplete = this.stepComplete < id ? id : this.stepComplete;
    this.acc.toggle(`panel-${this.stepComplete + 1}`);
  }
  onPanelChange($event) {
    console.log($event, this.stepComplete)
    let panelId = parseInt($event.panelId.split('-')[1]);
    if (panelId > this.stepComplete + 1) {
      $event.preventDefault();
    }
  }
}
