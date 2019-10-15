import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import * as firebase from 'firebase'
import { GlobalService } from '../global/global.service'
@Component({
  selector: 'app-counsellor-setting',
  templateUrl: './counsellor-setting.page.html',
  styleUrls: ['./counsellor-setting.page.scss'],
})
export class CounsellorSettingPage implements OnInit {
  public socialSharing: SocialSharing;
  notification:any;
  DND:any;
  PersonData:any;
  Pin:any;
  ConfirmPin:any;
  password:any='';
  confirmpassword:any='';
  showPasswordField:boolean=false;
  pin:any='';
  confirmpin:any='';
  showPinField:boolean=false;
  showDDInfo:boolean=false
  showZoomInfo:boolean=false
  DirectDepositInfo:any={accountNo:'',routingNo:''};
  ZoomCred:any={link:'',password:''}
  constructor(public global:GlobalService) { 
    this.PersonData=JSON.parse(localStorage.getItem('LoggedInUserData'))
    if(this.PersonData.ZoomCred){
      this.ZoomCred=this.PersonData.ZoomCred
    }
    if(this.PersonData.DirectDepositInfo){
      this.DirectDepositInfo=this.PersonData.DirectDepositInfo
    }
    // console.log(this.PersonData.setting.notification)
    this.notification=this.PersonData.setting?this.PersonData.setting.notification:false;
    this.DND=this.PersonData.setting?this.PersonData.setting.DND:false;
    console.log(this.notification)
    
  }

  ngOnInit() {
    
  }
  gotoInsta() {
    window.open('https://www.instagram.com/sochmobileapp/');
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
  DNDFlag(){
    firebase.database().ref(this.PersonData.account_type).child(this.PersonData.uid).child('setting').update({DND:this.DND})
    console.log(this.notification)
    firebase.database().ref(this.PersonData.account_type).child(this.PersonData.uid).once('value',snap=>{
      var LoggedInUserData=JSON.stringify(snap.val())
      localStorage.setItem('LoggedInUserData',LoggedInUserData)
      console.log(LoggedInUserData)
    })
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
  // SavePassword(){
  //   if(this.password != this.confirmpassword){
  //       this.global.presentToast("Passwords don't match")
  //     return console.error("Passwords don't match")
  //   }
  //   else{
  //     firebase.database().ref(this.PersonData.account_type).child(this.PersonData.uid).update({
  //       Pin4Digit:this.pin,
  //       ConfirmPin4Digit:this.confirmpin
  //     })
  //   }
  // }
  SavePin(){
    if(this.pin.length!=4 || this.confirmpin.length!=4){
      this.pin='';this.confirmpin='';
        this.global.presentToast("Pin should be of 4 digit")
      return console.error("Pin should be of 4 digit")
    }
    else if(this.pin!=this.confirmpin){
      this.pin.length='';this.confirmpin.length='';
      this.global.presentToast("Pin don't match")
      return console.error("Pin don't match")
    }
    else{
      firebase.database().ref(this.PersonData.account_type).child(this.PersonData.uid).update({
        Pin4Digit:this.pin,
        ConfirmPin4Digit:this.confirmpin
      })
      firebase.database().ref(this.PersonData.account_type).child(this.PersonData.uid).once('value',snap=>{
        var LoggedInUserData=JSON.stringify(snap.val())
        localStorage.setItem('LoggedInUserData',LoggedInUserData)
        console.log(LoggedInUserData)
        this.pin='';this.confirmpin='';
      })
    }
  }
  SaveDDInfo(){
    firebase.database().ref(this.PersonData.account_type).child(this.PersonData.uid).update({
      DirectDepositInfo:this.DirectDepositInfo
    })
    firebase.database().ref(this.PersonData.account_type).child(this.PersonData.uid).once('value',snap=>{
      var LoggedInUserData=JSON.stringify(snap.val())
      localStorage.setItem('LoggedInUserData',LoggedInUserData)
      console.log(LoggedInUserData)
      this.DirectDepositInfo='';
    })
  }
  SaveZoomInfo(){
    firebase.database().ref(this.PersonData.account_type).child(this.PersonData.uid).update({
      ZoomCred:this.ZoomCred
    })
    firebase.database().ref(this.PersonData.account_type).child(this.PersonData.uid).once('value',snap=>{
      var LoggedInUserData=JSON.stringify(snap.val())
      localStorage.setItem('LoggedInUserData',LoggedInUserData)
      this.PersonData['ZoomCred']=this.ZoomCred
      console.log(this.PersonData)
    })
  }


}
