import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import * as $ from "jquery";
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
	PersonData:any;
	ClientType:any;
	sub:any;
	interval:any;
	@ViewChild('tabs') tabs: IonTabs

	constructor() { 
		// this.PersonData=JSON.parse(localStorage.getItem('LoggedInUserData'))
		// console.log(this.PersonData.account_type)
		// this.interval=setInterval(()=>{
		// 	if(this.PersonData.account_type=='counsellor'){
		// 		$('.counsellor').show()
		// 		clearInterval(this.interval)
		// 	}
		// 	else if((this.PersonData.account_type=='User')){
		// 		$('.client').show()
		// 		clearInterval(this.interval)
		// 	}
		// },10)
		
	}

	ngOnInit() {
		// this.tabs.select('profile')
	}
	ngOnDestroy(){
		// this.interval.unsubscribe()
	}

}
