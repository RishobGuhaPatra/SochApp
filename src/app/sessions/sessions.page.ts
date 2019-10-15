import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.page.html',
  styleUrls: ['./sessions.page.scss'],
})
export class SessionsPage implements OnInit {

  currentUserId:any;
  allSessions:any=[];
  constructor(
    public db: AngularFireDatabase,
		private router: Router
  ) { }

  ngOnInit() {
    this.currentUserId = localStorage.getItem('userid');
    this.getSesionData();
  }


  getSesionData(){
    this.db.list('sessions').snapshotChanges().pipe(
      map(data => data.map(data => ({ key: data.payload.key, val: data.payload.val() })))
    ).subscribe((data:any) => {
      console.log(data)
        if(data){
          for (let index = 0; index < data.length; index++) {
            if(this.currentUserId==data[index].val.uid){
             this.allSessions.push(data[index]);
             console.log(data[index]);
             
            }
          }
        }        
    })
    
  }

  gotoChat(sessionDetail,index){
    this.router.navigate(['councelor-bubble',index,sessionDetail.key,sessionDetail.val.cid,sessionDetail.val.counsellorName])
  }

}
