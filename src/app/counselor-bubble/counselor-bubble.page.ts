

import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonContent, Platform, AlertController, NavController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';
import * as $ from 'jquery';
import { FirebaseProvider } from '../service/firebase.service';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
@Component({
  selector: 'app-counselor-bubble',
  templateUrl: './counselor-bubble.page.html',
  styleUrls: ['./counselor-bubble.page.scss'],
})
export class CounselorBubblePage implements OnInit {
  @ViewChild('IonContent') content: IonContent
  paramData: any;
  msgList: any;
  userName: any;
  user_input: string = '';
  User: string = 'Me';
  toUser: string = 'HealthBot';
  start_typing: any;
  loader: boolean;
  public toId: any;
  public roomList: any = [];
  public currentroom: any;
  public userid: any = localStorage.getItem('userid');
  public userChat: any = [];
  currentUserId: any;
  hours: any;
  minutes: any=0;
  seconds: any=0;
  sessionId: any;
  index: any;
  public unsubscribeBackEvent: any;
  allPlan: any;
  timeInterval: any;
  ReceiverUserDetails:any={}
  PersonData:any;
  sub:any;
  counsellorDetails:any;
  PlayTimer:any;
  duration=0;
  constructor(public activRoute: ActivatedRoute,
    public db: AngularFireDatabase,
    private changeDetectorRef: ChangeDetectorRef,
    public platform: Platform,
    public alertController: AlertController,
    public navCtrl: NavController,
    public router : Router,
    public firebaseProvider: FirebaseProvider,
    private browserTab: BrowserTab,
    public toastCtrl:ToastController
  ) {
    this.PersonData=JSON.parse(localStorage.getItem('LoggedInUserData'))
    this.sub=this.activRoute.params.subscribe((params) => {
      this.toId = params.id;
      this.userName = params.name;
      this.sessionId = params.sessionId;
      this.index = params.index;
      //console.log('index',this.index)
      this.db.object('sessions/' + this.sessionId).valueChanges().subscribe((data: any) => {
        if (data && data.selectedPlan) {
          this.allPlan = data.selectedPlan;
          //console.log('allPlan',this.allPlan)
          //var currentTime: any = moment(new Date()); // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
          //var eventTime: any = moment(currentTime).add(1, 'hours'); // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
          //var diffTime = eventTime - currentTime;
          //var duration:any = moment.duration(diffTime * 1000, 'milliseconds');
          //console.log('duration',duration)
          //var interval = 1000;
          
          // if (!this.allPlan.seesionList[this.index]) {
          //   this.timeInterval = setInterval(function () {
          //     duration = moment.duration(duration - interval, 'milliseconds');
          //     this.hours = duration.hours();
          //     this.minutes = duration.minutes();
          //     this.seconds = duration.seconds();
          //     $('#time').text(this.minutes + ':' + this.seconds);
          //   }, interval);
          // }
        }
      });
      if(this.PersonData.account_type=='User'){
        firebase.database().ref('sessions').child(this.sessionId).child('selectedPlan').on('value',snapshot=>{
          var data=snapshot.val();
          console.log('testSession',data)
          if(data.timer){
            // if (!this.allPlan.seesionList[this.index]) {
              // this.PlayTimer=true;
              this.timeInterval = setInterval(()=> {
                this.duration=this.duration+1;
                console.log('test',this.duration)
                this.minutes = (this.duration/60).toString();
                this.seconds = (this.duration%60).toString();
                $('#time').text(parseInt(this.minutes) + ':' + parseInt(this.seconds));
              }, 1000);
            // }
          }
          else{
            // this.PlayTimer=false;
            clearInterval(this.timeInterval)
          }
        })
      }
      if(this.PersonData.account_type=='User'){
        firebase.database().ref('counsellor').child(this.toId).on('value',snapshot=>{
          this.counsellorDetails= snapshot.val()
          // this.counsellorDetails=data
          console.log('counsellor',this.counsellorDetails)
        })
      }
      else{
        firebase.database().ref('counsellor').child(this.PersonData.uid).on('value',snapshot=>{
          this.counsellorDetails= snapshot.val()
          console.log('counsellor',this.counsellorDetails)
        })
      }
    });

  }

  ionViewWillLeave() {
    if (!this.allPlan.seesionList[this.index]) {
      this.showConfirm();
    }
    else if(this.PersonData.account_type=='User'){
      this.platform.backButton.unsubscribe();
      this.rateModal()
      //this.router.navigate(['/sessions']);
    }
    else{
      this.router.navigate(['/counsellor-tab']);
      this.sub.unsubscribe()
    }
  }

  initializeBackButtonCustomHandler(): void {
    this.unsubscribeBackEvent = this.platform.backButton.subscribeWithPriority(999999, () => {
      return this.showConfirm();
    });
  }

  async showConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you want to exit this session ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Yes',
          handler: () => {
            
            this.allPlan.seesionList[this.index] = true;
            // this.allPlan.rating[this.index] = true;
            this.db.object('sessions/' + this.sessionId).update({
              selectedPlan: this.allPlan
            });
            if(this.PersonData.account_type=='counsellor'){
              this.db.object('sessions/' + this.sessionId+'/selectedPlan').update({
                timer: false
              });
            }
            
            this.navCtrl.pop();
            clearInterval(this.timeInterval);
            this.platform.backButton.unsubscribe();
            
          }
        }
      ]
    });

    await alert.present();
  }

  ionViewWillEnter() {
    firebase.database().ref(this.PersonData.account_type=='User'?'counsellor/':'User/' + this.toId).on('value', resp => {
      this.ReceiverUserDetails=resp.val()
      //console.log('bl',this.ReceiverUserDetails)
    })
  }
  ngOnInit() {
    this.currentUserId = localStorage.getItem('userid');
    this.initializeBackButtonCustomHandler();
    this.getUserDetail();
  }

  getUserDetail() {
    this.db.object('counselorChat').valueChanges().subscribe((data: any) => {
      if (data) {
        let chatKeys = Object.keys(data);
        chatKeys.forEach(element => {
          if (data[element] &&
            (data[element].reciver_id == this.currentUserId
              && data[element].sender_id == this.toId)
            || (data[element].reciver_id == this.toId
              && data[element].sender_id == this.currentUserId)) {
            this.currentroom = data[element];
            this.currentroom['key'] = element;
            this.getChat(element);
          }
        });
      }
    });
  }

  getChat(chatRoomId) {
    this.db.object('counselorChat/' + chatRoomId).valueChanges()
      .subscribe((data: any) => {
        this.getChatList(data.chat)
      })
  }

  sendMsg() {
    let payload = {
      time: firebase.database.ServerValue.TIMESTAMP,
      msg: this.user_input,
      sender_id: localStorage.getItem('userid'),
      reciver_id: this.toId
    }
    if (this.user_input) {
      var LastMessageKey:any;
      if (this.currentroom) {
        let resdata:any = firebase.database().ref('counselorChat').child(this.currentroom.key).child('chat').push(payload)
        this.user_input = '';
        LastMessageKey=resdata.path.pieces_[resdata.path.pieces_.indexOf('chat')+1]
        console.log(resdata.path.pieces_[resdata.path.pieces_.indexOf('chat')+1])
        firebase.database().ref('counselorChat').child(this.currentroom.key).update({last_messageKey:LastMessageKey})
      }
      else {
        this.addRoom(payload);
      }
    }
  }

  getChatList(snapshot) {
    let chatkeys = Object.keys(snapshot);
    this.userChat = [];
    chatkeys.forEach(childSnapshot => {
      let item = snapshot[childSnapshot];
      item.key = childSnapshot;
      this.userChat.push(item);
    })
  }

  addRoom(data) {
    let res = this.db.list('counselorChat').push({
      sender_id: data.sender_id,
      reciver_id: data.reciver_id,
      chat: []
    });
    if (res) {
      let resdata = firebase.database().ref('counselorChat').child(res.key).child('chat').push(data)
      .then(x=>{
        this.firebaseProvider.sendNotificationNew(this.ReceiverUserDetails.device_token,'',this.PersonData.name?this.PersonData.name:this.PersonData.username,this.user_input)
        firebase.database().ref('counselorChat').child(res.key).child('chat').once('value',snap=>{
          firebase.database().ref('counselorChat').child(res.key).update({last_messageKey:Object.keys(snap.val())[0]})
        })
        //this.firebaseProvider.sendNotificationNew(this.ReceiverUserDetails.device_token,'',this.PersonData.data.name?this.PersonData.data.name:this.PersonData.data.username,this.user_input)
      })
      this.currentroom = data;
    }
    this.user_input = '';
  }
  senderSends() {
    this.loader = true;
    this.scrollDown()
    setTimeout(() => {
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        userAvatar: '../../../../assets/chat/chat/chat5.jpg',
        time: '12:01',
        message: 'Sorry, didn\'t get what you said. Can you repeat that please'
      });
      this.loader = false;
      this.scrollDown()
    }, 2000)

  }
  scrollDown() {
    setTimeout(() => {
      this.content.scrollToBottom(50)
    }, 200);
  }
  something($event: any) {
    $event.preventDefault()
  }
  userTyping(event: any) {
    this.start_typing = event.target.value;
    this.scrollDown()
  }
  rateModal(){
    //console.log('rate-Modal')
		let navigationExtras: NavigationExtras = {
			queryParams: {
        Plan: JSON.stringify(this.allPlan),
        index:this.index,
        sessionId:this.sessionId,
        CounsellorName:this.userName
			}
		  };
		this.router.navigate(["/rate-counselor"],navigationExtras)
  }
  
  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Prompt',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            if(alertData.name1==this.counsellorDetails.ZoomCred.password){
              this.gotoZoom()
            }
            else{
              this.presentToast("Password doesn't match")
            }
            
          }
        }
      ]
    });

    await alert.present();
  }

  gotoZoom(){
    this.browserTab.isAvailable()
    .then(isAvailable => {
      if (isAvailable) {
        this.browserTab.openUrl(this.counsellorDetails.ZoomCred.link);
      } 
    });
  }
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  playtimer(){
    this.db.object('sessions/' + this.sessionId+'/selectedPlan').update({
      timer: true
    });
    if (!this.allPlan.seesionList[this.index]) {
      this.PlayTimer=true;
      this.timeInterval = setInterval(()=> {
        this.duration=this.duration+1;
        this.minutes = (this.duration/60).toString();
        this.seconds = (this.duration%60).toString();
        $('#time').text(parseInt(this.minutes) + ':' + parseInt(this.seconds));
      }, 1000);
    }
  }
  stoptimer(){
    this.PlayTimer=false;
    clearInterval(this.timeInterval)
    this.db.object('sessions/' + this.sessionId+'/selectedPlan').update({
      timer: false
    });
  }

}
