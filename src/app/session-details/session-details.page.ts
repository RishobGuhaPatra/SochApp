import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import * as firebase from 'firebase';
@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.page.html',
  styleUrls: ['./session-details.page.scss'],
})
export class SessionDetailsPage implements OnInit {
  ClientDetails:any;
  ClientUid:any;
  counsellorUid:any;
  TotalSession:any=0;
  CompletedSession:any=0;
  SessionDetails:any={
    ScheduledTotalSession:0,
    ScheduledCompletedSession:0,
    InstantTotalSession:0,
    InstantCompletedSession:0,
    
  }
  constructor(private route: ActivatedRoute,) { 
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.ClientUid=JSON.parse(params.val).id
        this.counsellorUid=JSON.parse(params.val).cid
        this.getSession()
      }
    })
  }

  ngOnInit() {
    
  }
   getSession(){
    return new Promise((resolve)=>{
    firebase.database().ref('sessions').once('value',snapshot=>{
      var data=snapshot.val()
      for(var key in data){
        if(this.ClientUid==data[key].uid && this.counsellorUid==data[key].cid){
          console.log(data[key])
          if(data[key].selectedPlan.isScheduled){
            this.SessionDetails.ScheduledTotalSession+=(data[key].selectedPlan.seesionList).length
            var sessionList=data[key].selectedPlan.seesionList
            for(var key2 in sessionList){
              if(sessionList[key2]){
                this.SessionDetails.ScheduledCompletedSession++;
              }
            }
          }
          else{
            this.SessionDetails.InstantTotalSession+=(data[key].selectedPlan.seesionList).length
            var sessionList=data[key].selectedPlan.seesionList
            for(var key2 in sessionList){
              if(sessionList[key2]){
                this.SessionDetails.InstantCompletedSession++;
              }
            }
          }
          

        }

      }
      // delete data['-LfJb1EPx1JevlKksC1f']
      console.log(this.TotalSession)
      console.log(this.CompletedSession)
    })
  })
  }

}
