import { Component, OnInit } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Router } from "@angular/router";
@Component({
  selector: 'app-pin',
  templateUrl: './pin.page.html',
  styleUrls: ['./pin.page.scss'],
})
export class PINPage implements OnInit {
  pin: string ="";
  loggedInUserData:any;
  
  constructor(private vibration: Vibration,private router: Router,) { }

  ngOnInit() {
    this.loggedInUserData=JSON.parse(localStorage.getItem('LoggedInUserData'))
  }

  handleInput(pin) {
    if (pin === 'clear') {
      this.pin = '';
      console.log(this.pin)
      return;
    }
    if (this.pin.length === 4) {
      console.log(this.pin.length)
      this.vibration.vibrate(500);
      return;
    }
    else{
      this.pin += pin;
      console.log('pin',this.pin)
      if(this.pin.length==4){
        if(this.loggedInUserData && this.loggedInUserData.account_type=='counsellor' && this.loggedInUserData.Pin4Digit==this.pin){
          this.router.navigate(["/counsellor-tab"]);
        }
        else if(this.loggedInUserData && this.loggedInUserData.account_type=='User' && this.loggedInUserData.Pin4Digit==this.pin){
          this.router.navigate(["/tabs"]);
        }
      }
    }
    // if(this.pin.length <=4){
      
    // }
    
  }
}
