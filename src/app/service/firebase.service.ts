
// import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

// import {Observable} from 'rxjs/Observable';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, concatAll } from 'rxjs/operators';
import { FCM } from '@ionic-native/fcm/ngx';
import * as firebase from 'firebase';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()

export class FirebaseProvider {
    public rooms: any = [];
    public msglist;
    public addrooms;
    public user: any;
    notificationtype: any;
    notificationdata: any;
    token: any;
    session: any;
    temp = [];
    public apiheader;
    public headers = new Headers;
    constructor(public db: AngularFireDatabase,
        public httpClient: HttpClient,
        public http: Http,
       public fcm:FCM) {

    }
    gettoken() {
        return firebase.messaging().requestPermission().then((permission) => {
            return firebase.messaging().getToken().then((fcmToken) => {
                return fcmToken;
            }).catch((err) => {
            });
        }).catch((err) => {
        });
    }
    getTokenNew(){
        return new Promise((resolve,reject)=>{
            this.fcm.getToken().then(token => {
                if(token){
                    resolve(token)
                }
                else{
                    resolve(false)
                }
               },error=>{
                resolve(false)
               });
        })
       
    }
    sendNotification(data) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'key=AAAAnkzLOAM:APA91bEZUwsiQIZxfF0hNdwuM6c7mWQ0aJrnWemo8rO9gyHtOX8fY_kNW8xTfLG-OwBqkFcQ4TNKsvM57b77_yqiGuZib6OScNmfP6tGJ3pB1NhNgIbs5lGubuk-mIxDuOS90dwwWQc7');
        
        let payload = {
            to: data.token,
            data: {
                "body": "Test Notification !!!",
                "title": "Test Title !!!"
            }
        }
        console.log(payload);
        console.log(this.headers);
        this.http.post('https://fcm.googleapis.com/fcm/send', payload, { headers: this.headers }).
            map(response => {
                console.log(response);
                return response;
            }, err => {
                console.log(err);

            }).subscribe(res => {
                console.log(res);

            })
        // this.http
        //     .post('https://fcm.googleapis.com/fcm/send', payload, { headers: this.apiheader })
        //     .pipe(
        //         map((data: any) => {
        //             console.log(data);

        //         }, err => {
        //             console.log("err", err);

        //         }));
    }
    sendNotificationNew(token,aditionalData,title,body) {
        var headers=new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'key=AAAAnkzLOAM:APA91bEZUwsiQIZxfF0hNdwuM6c7mWQ0aJrnWemo8rO9gyHtOX8fY_kNW8xTfLG-OwBqkFcQ4TNKsvM57b77_yqiGuZib6OScNmfP6tGJ3pB1NhNgIbs5lGubuk-mIxDuOS90dwwWQc7');
        let options=new RequestOptions({headers:headers});
        let payload = {
            'notification':{
                "title":title,
                "body":body,
                'icon':'assets/imgs/logo.png',
                "click_action":"FCM_PLUGIN_ACTIVITY"
              },
            'to': token,
            "priority":'high',
            'data':{additionalData:aditionalData}
        }
        // console.log(payload);
        // console.log(this.headers);
        this.http.post('http://fcm.googleapis.com/fcm/send', payload, options).
           subscribe(response => {
                console.log('Success',response);
                return response;

            },err => {
                console.log('Failed',err);

            })
    }
    public getAdminHeaders(): HttpHeaders {
        this.apiheader = new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": "key=AAAAnkzLOAM:APA91bEZUwsiQIZxfF0hNdwuM6c7mWQ0aJrnWemo8rO9gyHtOX8fY_kNW8xTfLG-OwBqkFcQ4TNKsvM57b77_yqiGuZib6OScNmfP6tGJ3pB1NhNgIbs5lGubuk-mIxDuOS90dwwWQc7"
        });
        return this.apiheader;
    }
} 
