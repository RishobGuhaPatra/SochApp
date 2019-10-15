import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { getLocaleTimeFormat } from '@angular/common';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Router, NavigationExtras } from '@angular/router';
// import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
// import { resolve } from 'dns';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  ClientList:any=[]
  ShowList:boolean=false;
  testKey=0;
  ListCount:any=0;
  roomData:any;
  LoggedInUserData:any;
  sub:any;
  sessions:any=[];
  sessionDetails:any;
  constructor(private callNumber: CallNumber,private router: Router,private iab: InAppBrowser,private browserTab: BrowserTab) {
   
   }
   doRefresh(event){
    this.ClientList=[]
     this.ngOnInit()
     setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  
   }
  ngOnInit() {
    this.LoggedInUserData=JSON.parse(localStorage.getItem('LoggedInUserData'))
    console.log(this.LoggedInUserData)
    firebase.database().ref('sessions').once('value',snap=>{
      var data=snap.val()
        for(var key in data){
          this.sessions.unshift({key:key,data:data[key]})
        }
        console.log(this.sessions)
     })
    this.sub=this.getListData().then(x=>{
      
      if(x){
        for(var key in this.roomData){
          if(this.roomData[key].reciver_id ==this.LoggedInUserData.uid || this.roomData[key].sender_id ==this.LoggedInUserData.uid){
            console.log('check0')
            if(this.roomData[key].reciver_id ==this.LoggedInUserData.uid){
              console.log('check1')
              this.getSenderData(this.roomData,key).then(x=>{
                if(x){
                  console.log(x)
                  this.getTime(x)
                }
                // this.getTime(this.roomData[key])
              })
            }
            else{
              this.getReceiverData(this.roomData,key).then(x=>{
                if(x){
                  console.log(x)
                  this.getTime(x)
                }
                // this.getTime(this.roomData[key])
              })
            }
          }
        }
      }
    })
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe()
  }
  gotoCaller(phoneNo){
    this.browserTab.isAvailable()
    .then(isAvailable => {
      if (isAvailable) {
        this.browserTab.openUrl('https://zoom.us/j/6133939173');
      } else {
        
      }
    });
    // const browser = this.iab.create('https://zoom.us/j/6133939173');
    // browser.close();
    // browser.on('loadstop').subscribe(event => {
    //   browser.insertCSS({ code: "body{color: red;" });
      
    // });
    // this.callNumber.callNumber(phoneNo, true)
    //   .then(res => console.log('Launched dialer!', res))
    //   .catch(err => console.log('Error launching dialer', err));
  }
  getListData(){
    return new Promise((resolve,reject)=>{
    var key:any;
    firebase.database().ref('counselorChat').once('value',snapshot=>{
      this.roomData=snapshot.val()
      console.log(this.roomData)
      resolve(this.roomData)
      })
      
    })
  }
  getTime(time){
    var chatLength:any=Object.keys(time.chat).length-1
    var key=Object.keys(time.chat)[chatLength]
    var date_time:any=new Date((time.chat[key].time)*1000).toString()
    var time_24:any=date_time.split(' ')[4]
    // var time_24:any='09:00:01'
    var convert_12:any=time_24.split(':')
    if (parseInt(convert_12[0]) < 13) {
      time.chat[key].time=( (parseInt(convert_12[0])<10?'0'+parseInt(convert_12[0]):parseInt(convert_12[0])) + ':' + (parseInt(convert_12[1])<10?'0'+parseInt(convert_12[1]):parseInt(convert_12[1])) + (parseInt(convert_12[0])!=12?' AM':' PM'))
    }
    else {
        let hours:any=parseInt(convert_12[0]) - 12;
        hours=(hours < 10) ? '0'+hours:hours;
        time.chat[key].time=(hours+ ':' + parseInt(convert_12[1]) + ' PM');
    }
    this.ClientList.unshift(time)
    console.log(this.ClientList)
  }
  
  getReceiverData(roomData,key){
    return new Promise((resolve,reject)=>{
      var receiverDetails:any;
      var getDetails:any={}
      firebase.database().ref(this.LoggedInUserData.account_type=='User'?'User/':'counsellor/'+ roomData[key].reciver_id).once('value',snap1=>{
        console.log(key)
          receiverDetails=snap1.val();
          if(receiverDetails){
            getDetails=this.MergeJson(getDetails, roomData[key]);
            getDetails=this.MergeJson(getDetails, receiverDetails);
            // this.ClientList.push(getDetails)
            // this.ListCount++
            resolve(getDetails)
          }
          else{
            resolve(false)
          }
      })
    })
  }
  getSenderData(roomData,key){
    return new Promise((resolve,reject)=>{
      var senderDetails:any;
      var getDetails2:any={}
      console.log(this.LoggedInUserData.account_type=='User'?'counsellor/':'User/')
      firebase.database().ref(this.LoggedInUserData.account_type=='User'?'counsellor/':'User/'+roomData[key].sender_id).once('value',snap2=>{
        console.log(key)
        senderDetails=snap2.val();
        console.log(senderDetails)
        if(senderDetails){
          getDetails2=this.MergeJson(getDetails2, roomData[key]);
          getDetails2=this.MergeJson(getDetails2, senderDetails);
          // this.ClientList.push(getDetails2)
          // this.ListCount++
          resolve(getDetails2)
          // if(key==lastKey){
          //   this.ShowList=true
          // }
          
        }
        else{
          resolve(false)
        }
      })
    })
  }
  MergeJson(o1, o2) {
    for (var key in o2) {
     o1[key] = o2[key];
    }
    return o1;
   }
   gotoJournel(uid){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: uid
      }
    };
    this.router.navigate(['/profile'], navigationExtras);
   }
   gotoSessionNotes(uid){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: uid
      }
    };
    this.router.navigate(['session-notes'], navigationExtras);

   }
   session(val,val2){
     for(var key in this.sessions){
       if(this.sessions[key].data.cid==this.LoggedInUserData.uid && this.sessions[key].data.uid==val){
         console.log(val)
         console.log(this.sessions[key].key)
         for(var key1 in this.sessions[key].data.selectedPlan.seesionList){
           if(!this.sessions[key].data.selectedPlan.seesionList[key1]){
            this.router.navigate(['/councelor-bubble',key1,this.sessions[key].key,val,val2])
            console.log(key1)
            console.log(this.sessions[key].data.selectedPlan.seesionList[key1])
            break;
           }
         }
         
          break;
       }
     }
    
   }
  //  ['/councelor-bubble',0,'-LndI39J1jgoLrr7e6gd',key.sender_id==LoggedInUserData.uid?key.reciver_id:key.sender_id,key.name]
   

}
