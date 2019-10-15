import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {
  ActiveClient:any=[]
  LoggedInUserData:any;
  sessionList:any=[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.LoggedInUserData=JSON.parse(localStorage.getItem('LoggedInUserData'))
    this.getActiveClient().then(x=>{
      // if(x){
      //   this.getSession()
      // }
    })
    // firebase.database().ref('sessions')
  }
  getActiveClient(){
    return new Promise((resolve)=>{
      firebase.database().ref('User').once('value',snapshot=>{
        var data=snapshot.val()
        console.log(data)
        for(var key in data){
          if(data[key].defaultcounseller==this.LoggedInUserData.uid){
            this.ActiveClient.push(data[key])
          }
        }
        console.log(this.ActiveClient)
        resolve(this.ActiveClient)
      })
    })
    
  }
  getSessionDetails(val){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        val: JSON.stringify({id:val.uid,cid:val.defaultcounseller})
      }
    };
    this.router.navigate(['/session-details'], navigationExtras);
  }
  // getSession(){
  //   return new Promise((resolve)=>{
  //   firebase.database().ref('sessions').once('value',snapshot=>{
  //     var data=snapshot.val()
  //     delete data['-LfJb1EPx1JevlKksC1f']
  //     console.log(data)
  //     // for(var key in data){
  //     //   if(data[key].defaultcounseller==this.LoggedInUserData.uid){
  //     //     this.ActiveClient.push(data[key])
  //     //   }
  //     // }
  //     // console.log(this.ActiveClient)
  //   })
  // })
  // }

}
