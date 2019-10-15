import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from "@angular/router";
// import { FCM } from '@ionic-native/fcm/ngx';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase'
// import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public menuPages = [];
  public userdata: any;
  currentUserId:any;
  sub:any;
  loggedInUserData:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public menu: MenuController,
    // public fcm: FCM,
    public db: AngularFireDatabase,
    
    // private push: Push
  ) {
    // console.log(parseInt('1.12'))
    this.loggedInUserData=JSON.parse(localStorage.getItem('LoggedInUserData'))
    if(this.loggedInUserData && this.loggedInUserData.account_type=='User'){
      this.menuPages=[
        {
          title: 'Account',
          url: 'account',
          icon: 'person'
        },
        {
          title: 'Settings',
          url: 'settings',
          icon: 'settings'
        },
        {
          title: 'Rates',
          url: 'rates',
          icon: 'pricetags'
        }
      ];
    }
    else{
      this.menuPages=[
        {
          title: 'Account',
          url: 'account',
          icon: 'person'
        },
        {
          title: 'Settings',
          url: 'counsellor-setting',
          icon: 'settings'
        },
        // {
        //   title: 'Rates',
        //   url: 'rates',
        //   icon: 'pricetags'
        // }
      ];

    }
    this.initializeApp();
    console.log('test')
    if(this.loggedInUserData){
      firebase.database().ref(this.loggedInUserData.account_type).child(this.loggedInUserData.uid).update({available:true})
    }
  }

  gotoUrl(url) {
    this.router.navigate([url]);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.fcm.subscribeToTopic('marketing');
      this.currentUserId=localStorage.getItem('userid')
      this.loggedInUserData=JSON.parse(localStorage.getItem('LoggedInUserData'))
      if (this.currentUserId) {
        if(this.loggedInUserData){
          this.router.navigate(['pin']);
        }
        
      }
      else {
        this.router.navigate(['login']);
      }

      this.platform.resume.subscribe(()=>{//Foreground
        console.log('Foreground',)
        this.loggedInUserData=JSON.parse(localStorage.getItem('LoggedInUserData'))
        if(this.loggedInUserData){
          firebase.database().ref(this.loggedInUserData.account_type).child(this.loggedInUserData.uid).update({available:true})
        }
      });
  
      this.platform.pause.subscribe(()=>{//Background
        this.loggedInUserData=JSON.parse(localStorage.getItem('LoggedInUserData'))
        console.log('Background',)
        if(this.loggedInUserData){
          firebase.database().ref(this.loggedInUserData.account_type).child(this.loggedInUserData.uid).update({available:false})
        }
      });

      // this.fcm.getToken().then(token => {
      //   console.log(token);
      //   // this.db.object('User/' + localStorage.get('userid')).valueChanges().subscribe(data => {
      //   //   this.userdata = data;
      //   this.db.object('User/' + localStorage.get('userid')).update({
      //     token: token
      //     // })
      //   })

      //   // backend.registerToken(token);
      // });
      // this.push.hasPermission()
      //   .then((res: any) => {

      //     if (res.isEnabled) {
      //       console.log('We have permission to send push notifications');
      //     } else {
      //       console.log('We do not have permission to send push notifications');
      //     }

      //   });
      // this.push.listChannels().then((channels) => console.log('List of channels', channels))
      // // this.push.deleteChannel('notification').then(() => console.log('Channel deleted'));
      // // this.push.deleteChannel('PushPluginChannel').then(() => console.log('Channel deleted'));
      // // this.push.deleteChannel('fcm_fallback_notification_channel').then(() => console.log('Channel deleted'));
      // this.push.createChannel({
      //   id: "notification",
      //   description: "default notification",
      //   // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
      //   importance: 4
      //   // visibility: 1
      // }).then(() => console.log('Channel created'));
      // const options: PushOptions = {
      //   android: {},
      //   ios: {
      //     alert: 'true',
      //     badge: true,
      //     sound: 'true'
      //   },
      //   windows: {},
      //   browser: {
      //     pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      //   }
      // }

      // const pushObject: PushObject = this.push.init(options);


      // pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

      // pushObject.on('registration').subscribe((registration: any) => {
      //   console.log('Device registered', registration);
      //   console.log(registration.registrationId);
      //   // if (localStorage.getItem('userid')) {
      //   //   this.db.object('User/' + localStorage.getItem('userid')).update({
      //   //     token: registration.registrationId
      //   //     // })
      //   //   })
      //   // }

      // })

      // pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

      // this.fcm.onNotification().subscribe(data => {
      //   console.log(data);

      //   if (data.wasTapped) {
      //     console.log("Received in background");
      //   } else {
      //     console.log("Received in foreground");
      //   };
      // });

      // this.fcm.onTokenRefresh().subscribe(token => {
      //   // backend.registerToken(token);
      // });
    });
    

  }

  logout() {
    this.menu.close();
    if(this.loggedInUserData){
      firebase.database().ref(this.loggedInUserData.account_type).child(this.loggedInUserData.uid).update({available:false})
      this.loggedInUserData=''
    }
    
    this.router.navigate([''])
    
    // this.router.navigate(['login']);
    localStorage.removeItem("userid");
    localStorage.removeItem('LoggedInUserData')
    console.log('a',localStorage.getItem('userid'))
    localStorage.clear();
    console.log('b',localStorage.getItem('userid'))
    // this.sub.unsubscribe();
  }
}
