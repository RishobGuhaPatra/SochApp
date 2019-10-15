import { Component, OnInit } from "@angular/core";
// import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from "firebase/app";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { AlertController, ToastController } from "@ionic/angular";
// import { FCM } from '@ionic-native/fcm/ngx';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseProvider } from '../service/firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";
  LoggedInUserData:any;
  loginType:any;
  constructor(
    public afAuth: AngularFireAuth,
    public user: UserService,
    public router: Router,
    public alertController: AlertController,
    // public fcm: FCM,
    public db: AngularFireDatabase,
    public firebaseProvider: FirebaseProvider,
    public toastController: ToastController
  ) { }

  ngOnInit() { }

  async login() {
    const { username, password } = this;
    this.afAuth.auth.signInWithEmailAndPassword(
      username,
      password
    ).then(res => {
      var account_type:any=['User','counsellor']
      // firebase.database().ref('User').once('value',snap=>{
      //   var data=snap.val()
      //   for(var key in data){
      //     if(key==res.user.uid){
      //       this.loginType=data[key].account_type
      //       this.LoggedInUserData=data[key]
      //       localStorage.setItem('LoggedUserData',JSON.stringify(this.LoggedInUserData))
      //       localStorage.setItem('userid', res.user.uid);
      //       break;
      //     }
      //   }
      // })
      for(var key in account_type){
        firebase.database().ref(account_type[key]).once('value',snap=>{
          var data=snap.val()
          for(var key in data){
            if(key==res.user.uid){
              this.loginType=data[key].account_type
              this.LoggedInUserData=data[key]
              localStorage.setItem('LoggedInUserData',JSON.stringify(this.LoggedInUserData))
              if(this.loginType){
                this.firebaseProvider.getTokenNew().then(x=>{
                  firebase.database().ref(this.loginType).child(res.user.uid).update({device_token:x,available:true})
                })
              }
              
              if(this.LoggedInUserData){
                if(this.LoggedInUserData.verification=='cleared' || this.LoggedInUserData.account_type!='counsellor'){
                  localStorage.setItem('userid', res.user.uid);
                  this.user.setUser({
                    username,
                    uid: res.user.uid
                  });
                  if(this.LoggedInUserData.account_type=='counsellor'){
                    this.router.navigate(["/counsellor-tab"]);
                  }
                  else if(this.LoggedInUserData.account_type=='User'){
                    this.router.navigate(["/tabs"]);
                  }
                }
                else if(this.LoggedInUserData.verification=='pending'){
                  this.presentAlert('Waiting', 'Your account is under verification. You can also contact +1(321)209-1137 number for updates.')
                }
              }
              break;
            }
          }
        })
      }
      
      // if(this.loginType){
      //   this.firebaseProvider.getTokenNew().then(x=>{
      //     console.log(x)
      //     firebase.database().ref(this.loginType).child(res.user.uid).update({device_token:x})
      //   })
      // }
      
      // if(this.LoggedInUserData){
      //   if(this.LoggedInUserData.verification=='cleared' || this.LoggedInUserData.account_type!='counsellor'){
      //     localStorage.setItem('userid', res.user.uid);
      //     console.log(this.LoggedInUserData.verification=='cleared')
      //     console.log(this.LoggedInUserData.account_type)
      //     console.log(this.LoggedInUserData.account_type=="counsellor")
      //     this.user.setUser({
      //       username,
      //       uid: res.user.uid
      //     });
      //     this.router.navigate(["/tabs"]);
      //   }
      //   else if(this.LoggedInUserData.verification=='pending'){
      //     this.presentAlert('Waiting', 'Your account is under verification. You can also contact +1(321)209-1137 number for updates.')
      //   }
      // }
      
      
    }, err => {
      this.presentToast(err.message);
    })
    //   try {
    //     // kind of a hack.
    //     const res: any = await this.afAuth.auth.signInWithEmailAndPassword(
    //       username,
    //       password
    //     );
    //     console.log(res);

    //     if (res) {
    //       localStorage.setItem('userid', res.user.uid);

    //       this.user.setUser({
    //         username,
    //         uid: res.user.uid
    //       });
    //       // this.fcm.getToken().then(token => {
    //       //   console.log(token);
    //       //   this.db.object('User/' + localStorage.get('userid')).valueChanges().subscribe(data => {
    //       //     this.db.object('User/' + localStorage.get('userid')).update({
    //       //       token: token
    //       //     })
    //       //   })

    //       //   // backend.registerToken(token);
    //       // });
    //       this.router.navigate(["/tabs"]);
    //     }
    //   } catch (err) {
    //     // console.dir(err);
    //     let toast: any = this.toastController.create({
    //       message: err.message,
    //       duration: 2000
    //     });
    //     toast.present();
    //   }
    //   if (err.code === "auth/user-not-found") {
    //     console.log("User not found");
    //   }
    // }
  }
  async register() {
    this.router.navigate(["/register"]);
  }

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ["OK"]
    });

    await alert.present();
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  send() {
    // fTwyYbLgX1s:APA91bFMkVT20UXotbeqDxdTEgID1S1b2_Cm1pP8HbXg0TN6TK6hGdMUXWDPIK8gS1CAtPXAmQ9HihEraF5Jw88bVzATmlZ1Sw_CGpuYfgoXdnoK_g1nKL7SxgVy8l_lVnlhXRYQSijI
    console.log("send");

    let data = {
      token: "fTwyYbLgX1s:APA91bFMkVT20UXotbeqDxdTEgID1S1b2_Cm1pP8HbXg0TN6TK6hGdMUXWDPIK8gS1CAtPXAmQ9HihEraF5Jw88bVzATmlZ1Sw_CGpuYfgoXdnoK_g1nKL7SxgVy8l_lVnlhXRYQSijI",
      msg: "test"
    }
    console.log(data);

    this.firebaseProvider.sendNotification(data);

  }
  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => this.presentToast('Email Sent'))
      .catch((error) => this.presentToast('Please try again'))
  }
}
