import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import firebaseConfig from './firebase'
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpModule } from '@angular/http'
import { UserService } from './user.service';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { ShareModule } from './share.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx'
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { PayPal, PayPalPayment, PayPalConfiguration, PayPalPaymentDetails } from '@ionic-native/paypal/ngx';
import { AngularFireStorage } from 'angularfire2/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FCM } from '@ionic-native/fcm/ngx';

// import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions'
import { DatePicker } from '@ionic-native/date-picker/ngx';
// import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FirebaseProvider } from '../app/service/firebase.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as firebase from 'firebase';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { GlobalService } from '../app/global/global.service';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import * as HighCharts from 'highcharts';
// import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
var firebaseConfig = {
    apiKey: "AIzaSyDKfqIf4nYUnObFarneYvKdk4j5Ai-oZmA",
    authDomain: "soch-fac74.firebaseapp.com",
    databaseURL: "https://soch-fac74.firebaseio.com",
    projectId: "soch-fac74",
    storageBucket: "soch-fac74.appspot.com",
    messagingSenderId: "679893219331",
    appId: "1:679893219331:android:65c90561be2b038d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		AngularFireModule.initializeApp(firebaseConfig),
		// AngularFireAuthModule,
		// AngularFirestoreModule,
		HttpModule,
		ShareModule,
		AngularFireDatabaseModule,
		HttpClientModule,
		// ChartsModule,
		// Ng2GoogleChartsModule,
		// AngularFireFunctionsModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		UserService,
		AuthService,
		AngularFireAuth,
		SocialSharing,
		File,
		// ChartsModule,
		FileChooser,
		FileOpener,
		FileTransfer,
		DocumentViewer,
		IOSFilePicker,
		Media,
		NativeAudio,
		PayPal,
		DatePicker,
		InAppBrowser,
		// Push,
		FirebaseProvider,
		Geolocation,
		NativeGeocoder,
		FCM,
		CallNumber,
		Vibration,
		GlobalService,
		AngularFireStorage,
		SocialSharing,
		BrowserTab,
		
		// InAppBrowser
		// AppLauncher
		// {
		//  provide:
		//  FunctionsRegionToken,
		//  useValue: 'us-central1'
		//  }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }