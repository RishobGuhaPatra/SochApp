/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/



import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseProvider } from '../service/firebase.service';
@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.page.html',
  styleUrls: ['./bubble.page.scss'],
})
export class BubblePage implements OnInit {
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
  getroom = firebase.database().ref('rooms');
  public roomList: any = [];
  public currentroom: any;
  public userid: any = localStorage.getItem('userid');
  public userChat: any = [];
  public blockuserDetail: any = [];
  currentUserId: any;
  selectedblockuser: any;
  public isBlock: boolean = true;
  public userdata: any;
  public todata: any;
  ReceiverUserDetails:any={}
  PersonData:any;
  constructor(public activRoute: ActivatedRoute,
    public db: AngularFireDatabase,public firebaseProvider: FirebaseProvider) {
    this.activRoute.params.subscribe((params) => {
      // console.log(params)
      this.toId = params.id;
      this.paramData = params
      this.userName = params.name
    });
    this.PersonData=JSON.parse(localStorage.getItem('LoggedInUserData'))
    console.log(this.PersonData)
    this.currentUserId = localStorage.getItem('userid');
    // this.msgList = [
    //   {
    //     userId: 'HealthBot',
    //     userName: 'HealthBot',
    //     userAvatar: '../../../../assets/chat/chat/chat3.jpg',
    //     time: '12:00',
    //     message: 'Hello, have you seen this great chat UI',
    //     id: 0
    //   },
    //   {
    //     userId: 'Me',
    //     userName: 'Me',
    //     userAvatar: this.paramData.image ? this.paramData.image : '../../../../assets/chat/chat/chat5.jpg',
    //     time: '12:03',
    //     message: 'Yeah, I see this. This looks great. ',
    //     id: 1,
    //   },
    //   {
    //     userId: 'HealthBot',
    //     userName: 'HealthBot',
    //     userAvatar: '../../../../assets/chat/chat/chat3.jpg',
    //     time: '12:05',
    //     message: '... and this is absolutely free, anyone can use',
    //     id: 3
    //   },
    //   {
    //     userId: 'Me',
    //     userName: 'Me',
    //     userAvatar: '../../../../assets/chat/chat/chat5.jpg',
    //     time: '12:06',
    //     message: 'wow ! that\'s great. Love to see more of such chat themes',
    //     id: 4
    //   },
    //   {
    //     userId: 'HealthBot',
    //     userName: 'HealthBot',
    //     userAvatar: '../../../../assets/chat/chat/chat3.jpg',
    //     time: '12:07',
    //     message: 'Oh there are several other designs. Check all their designs on their website enappd.com',
    //     id: 5
    //   }
    // ];

  }
  ionViewWillEnter() {
    this.getroom.on('value', resp => {
      this.getroomList(resp);
    });
    firebase.database().ref('User/' + this.toId).on('value', resp => {
      this.ReceiverUserDetails=resp.val()
      console.log('bl',this.ReceiverUserDetails)
    })
    firebase.database().ref('User/' + this.currentUserId + '/blockuser').on('value', resp => {
      // console.log('bK',resp)
      // console.log('bl',resp.val())
      this.getBlockUserList(resp);
    })
    this.db.object('User/' + this.userid).valueChanges().subscribe((data: any) => {
      this.userdata = data;

    })
    this.db.object('User/' + this.toId).valueChanges().subscribe((data: any) => {
      this.todata = data;

    })
  }
  ngOnInit() {
   
    // this.getblockuser();
    // console.log(this.userid);

  }

  async sendMsg() {
    let Timestamp={time:firebase.database.ServerValue.TIMESTAMP}
    console.log(Timestamp)
    console.log(Timestamp.time)
    //console.log(Timestamp)
    // var time:any=new Date(parseInt(Timestamp)*1000).toString()
    // console.log((time.split(' ')[4]).split(':'))
    let payload = {
      time: firebase.database.ServerValue.TIMESTAMP,
      msg: this.user_input,
      sender_id: localStorage.getItem('userid'),
      reciver_id: this.toId,
    }
    if (this.user_input) {
      var LastMessageKey:any;
      if (this.currentroom) {
        let resdata :any= firebase.database().ref('rooms').child(this.currentroom.key).child('chat').push(payload)
           this.firebaseProvider.sendNotificationNew(this.ReceiverUserDetails.device_token,'',this.PersonData.name?this.PersonData.name:this.PersonData.username,this.user_input)
        this.user_input = '';
        LastMessageKey=resdata.path.pieces_[resdata.path.pieces_.indexOf('chat')+1]
        console.log(resdata.path.pieces_[resdata.path.pieces_.indexOf('chat')+1])
        firebase.database().ref('rooms').child(this.currentroom.key).update({last_messageKey:LastMessageKey})
        
        
      }
      else {
        this.addRoom(payload);
      }
    }
    // if (this.user_input !== '') {
    //   this.msgList.push({
    //     userId: this.toUser,
    //     userName: this.toUser,
    //     userAvatar: this.paramData.image ? this.paramData.image : '../../../../assets/chat/chat/chat3.jpg',
    //     time: '12:01',
    //     message: this.user_input,
    //     id: this.msgList.length + 1
    //   })
    //   this.user_input = '';
    //   this.scrollDown()
    //   setTimeout(() => {
    //     this.senderSends()
    //   }, 500);

    // }
  }
  getroomList(snapshot) {
    // console.log("getroom");

    this.roomList = [];
    snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      this.roomList.push(item);
      // console.log("roomlist",this.roomList);

    });
    if (this.roomList.length > 0) {
      for (let index = 0; index < this.roomList.length; index++) {
        if (localStorage.getItem('userid') == this.roomList[index].sender_id && this.toId == this.roomList[index].reciver_id) {
          // console.log("if",this.roomList[index]);
          this.currentroom = this.roomList[index];
          let getChat = firebase.database().ref('/rooms/' + this.roomList[index].key + '/chat');
          getChat.on('value', resp => {
            this.getChatList(resp);
          });
          // this.db.list('/rooms/' + this.roomList[index].key + '/chat', {
          //   query: {
          //     orderByKey: true
          //   }
          // }).subscribe(res => {
          //   // console.log("res",res);
          //   this.userChat = res;
          // }, err => {

          // })

        }
        else if (this.toId == this.roomList[index].sender_id && localStorage.getItem('userid') == this.roomList[index].reciver_id) {
          // console.log("else",this.roomList[index]);
          this.currentroom = this.roomList[index];
          let getChat = firebase.database().ref('/rooms/' + this.roomList[index].key + '/chat');
          getChat.on('value', resp => {
            this.getChatList(resp);
          });
          // this.db.list('/rooms/' + this.roomList[index].key + '/chat', {
          //   query: {
          //     orderByKey: true
          //   }
          // }).subscribe(res => {
          //   // console.log(res);
          //   this.userChat = res;
          // }, err => {

          // })

        }

      }
    }
  }
  getChatList(snapshot) {
    this.userChat = [];
    snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      this.userChat.push(item);
    })
    // console.log(this.userChat);

  }
  addRoom(data) {
    let res = this.db.list('rooms').push({
      sender_id: data.sender_id,
      sender_details:{
        name:this.PersonData.name?this.PersonData.name:this.PersonData.username,
        profilePic:this.PersonData.profilePic?this.PersonData.profilePic:'',
        phoneNo:this.PersonData.phoneNo?this.PersonData.phoneNo:''
      },
      reciver_id: data.reciver_id,
      reciver_details:{
        name:this.ReceiverUserDetails.name?this.ReceiverUserDetails.name:this.ReceiverUserDetails.username,
        profilePic:this.ReceiverUserDetails.profilePic?this.ReceiverUserDetails.profilePic:'',
        phoneNo:this.ReceiverUserDetails.phoneNo?this.ReceiverUserDetails.phoneNo:''
      },
      chat: [],
    });
    let resdata:any;
    if (res) {
      console.log('res',res)
      resdata = firebase.database().ref('rooms').child(res.key).child('chat').push(data)
      .then(x=>{
        this.firebaseProvider.sendNotificationNew(this.ReceiverUserDetails.device_token,'',this.PersonData.name?this.PersonData.name:this.PersonData.username,this.user_input)
        firebase.database().ref('rooms').child(res.key).child('chat').once('value',snap=>{
          firebase.database().ref('rooms').child(res.key).update({last_messageKey:Object.keys(snap.val())[0]})
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
    // console.log($event)
  }
  userTyping(event: any) {
    // console.log(event);
    this.start_typing = event.target.value;
    this.scrollDown()
  }

  getBlockUserList(snapshot) {
    snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      this.blockuserDetail.push(item);
    })
    // console.log(this.blockuserDetail);
    if (this.blockuserDetail.length > 0) {
      for (let index = 0; index < this.blockuserDetail.length; index++) {
        if (this.toId == this.blockuserDetail[index].uid) {
          this.isBlock = false;
          this.selectedblockuser = this.blockuserDetail[index];
          break;
        }
        else {
          this.isBlock = true;
        }
      }
    }
    else {
      this.isBlock = true;
    }
    // this.db.list('User/' + this.currentUserId + '/blockuser').valueChanges()
    //   .subscribe((data: any) => {
    //     if (data) {
    //       console.log(data);

    //       this.blockuserDetail = data;
    //       for (let index = 0; index < this.blockuserDetail.length; index++) {
    //         if (this.toId == this.blockuserDetail[index].uid) {
    //           this.isBlock = false;
    //           this.selectedblockuser = this.blockuserDetail[index];
    //           break;
    //         }
    //         else {
    //           this.isBlock = true;
    //         }

    //       }
    //       console.log('blockuserDetail', this.blockuserDetail);
    //     }
    //   });
  }

  blockunblock() {
    // console.log(this.selectedblockuser);
    if (this.isBlock) {
      let payload = {
        uid: this.toId
      }
      // console.log(payload);

      this.db.list('User/' + this.currentUserId + '/blockuser').push(payload);
      this.isBlock = false;
    }
    else {
      // console.log("else");
      let resdata = firebase.database().ref('User').child(this.currentUserId).child('blockuser').child(this.selectedblockuser.key).remove()
      this.isBlock = true;
      // this.db.object('User/' + this.currentUserId + '/blockuser' + this.selectedblockuser.key).remove();
    }
  }
}


// this.currentUserId = localStorage.getItem('userid')
// this.db.object('User/'+this.currentUserId).valueChanges()
// .subscribe((data:any)=>{
//   if(data){

//     this.userDetail=data;
//     console.log('userData', this.userDetail);
//     if(this.userDetail.profilePic)
//     this.profilePic=this.userDetail.profilePic;
//     this.user.setUser(this.userDetail);
//   }
// });	