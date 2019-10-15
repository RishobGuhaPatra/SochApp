import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
@Component({
  selector: 'app-counsellor-tab',
  templateUrl: './counsellor-tab.page.html',
  styleUrls: ['./counsellor-tab.page.scss'],
})
export class CounsellorTabPage implements OnInit {
  @ViewChild('tabs') tabs: IonTabs
  constructor() { }

  ngOnInit() {
    
  }

}
