import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.page.html',
  styleUrls: ['./rates.page.scss'],
})
export class RatesPage implements OnInit {

  constructor() { }
  segmentTab: any;
  ngOnInit() {
  }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
    // console.log(this.segmentTab);
  }
}
