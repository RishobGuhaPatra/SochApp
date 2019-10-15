import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import * as firebase from 'firebase'
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  
  public socialSharing: SocialSharing;
  notification:any;
  emailUpdate:any;
  PersonData:any;

  constructor() { 
    this.PersonData=JSON.parse(localStorage.getItem('LoggedInUserData'))
    // console.log(this.PersonData.setting.notification)
    this.notification=this.PersonData.setting?this.PersonData.setting.notification:false;
    this.emailUpdate=this.PersonData.setting?this.PersonData.setting.emailUpdate:false;
    console.log(this.notification)
  }

  ngOnInit() {

  }
  notificationFlag(){
    firebase.database().ref(this.PersonData.account_type).child(this.PersonData.uid).child('setting').update({notification:this.notification})
    console.log(this.notification)
    firebase.database().ref(this.PersonData.account_type).child(this.PersonData.uid).once('value',snap=>{
      var LoggedInUserData=JSON.stringify(snap.val())
      localStorage.setItem('LoggedInUserData',LoggedInUserData)
      console.log(LoggedInUserData)
    })
  }
  EmailUpdate(){
    firebase.database().ref(this.PersonData.account_type).child(this.PersonData.uid).child('setting').update({emailUpdate:this.emailUpdate})
    console.log(this.notification)
    firebase.database().ref(this.PersonData.account_type).child(this.PersonData.uid).once('value',snap=>{
      var LoggedInUserData=JSON.stringify(snap.val())
      localStorage.setItem('LoggedInUserData',LoggedInUserData)
      console.log(LoggedInUserData)
    })
  }

  gotoInsta() {
    window.open('https://www.instagram.com/sochmobileapp/');
  }

  gotofb() {
    window.open('https://www.facebook.com/sochmobileapp/');
  }
  makePayment() {

  }

  share() {
    this.socialSharing.shareWithOptions({
      chooserTitle: 'Soch',
      message: 'Hey there! I found this cool new app called Soch, I think you should try it out!',
      url: 'https://play.google.com/store/apps/details?id=com.sochapp&hl=en',
    }).then(res => {
      // console.log("res", res);

    }, err => {
      console.log("err", err);

    })
  }
}
