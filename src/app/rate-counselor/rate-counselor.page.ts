import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ModalController,NavController } from '@ionic/angular'
import { ActivatedRoute,Router } from "@angular/router";
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-rate-counselor',
  templateUrl: './rate-counselor.page.html',
  styleUrls: ['./rate-counselor.page.scss'],
})
export class RateCounselorPage implements OnInit {
  star:any=[0,1,2,3,4]
  unselected_star:any=[]
  selected_star:any=[]
  shareCounsellorDetails:any='Testing';
  index:any;
  allPlan:any;
  sessionId:any;
  review:any;
  CounsellorName:any;
  constructor(private socialSharing: SocialSharing,public modalCtrl:ModalController,private route: ActivatedRoute,
    public db: AngularFireDatabase, public navCtrl:NavController) { 
    this.unselected_star=this.star
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params ) {
        //console.log('params',params)
        this.allPlan=JSON.parse(params.Plan);
        this.index=params.index
        this.sessionId=params.sessionId
        this.CounsellorName=params.CounsellorName
        // console.log('this.allPlan',this.allPlan)
      }
    })
  }
  checkStar(key){
    // console.log(key)
    this.unselected_star=[]
    this.selected_star=[]
    for(var i=0;i<this.star.length;i++){
      if(i<=key){
        this.selected_star.push(this.star[i])
      }
      else{
        this.unselected_star.push(this.star[i])
      }
      
    }
  }
  uncheckStar(key){
    this.unselected_star=[]
    for(var i=0;i<=key;i++){
      this.unselected_star.push(this.star[i])
    }
    
  }
  shareviaWhatsapp(){
    this.socialSharing.shareViaWhatsApp(this.shareCounsellorDetails,'','https://play.google.com/store/apps/details?id=com.whatsapp&hl=en')
    // this.socialSharing.shareWithOptions({
    //   chooserTitle: 'Soch',
    //   message: 'Hey there! I found this cool new app called Soch, I think you should try it out!',
    //   url: 'https://play.google.com/store/apps/details?id=com.whatsapp&hl=en',
    // })
    .then(res => {
      alert("res"+res);

    }, err => {
      alert("err"+ err);

    })
  }
  shareviaInsta(){
    var link:any='https://play.google.com/store/apps/details?id=com.instagram.android&hl=en'
    this.socialSharing.shareViaInstagram(this.shareCounsellorDetails,'')
    .then(res => {
    }, err => {
      this.socialSharing.shareWithOptions({
      chooserTitle: 'Soch',
      message: this.shareCounsellorDetails,
      url: link,
      })
      .then(res1 => {
        

      }, err2 => {
        alert("err"+ err2);

      })

    })

  }
  shareviafacebook(){
    var link:any='https://play.google.com/store/apps/details?id=com.facebook.katana&hl=en'
    // this.socialSharing.
    this.socialSharing.shareViaFacebook(this.shareCounsellorDetails,'',link)
    .then(res => {
      // alert("res"+res);

    }, err => {
      alert("err"+ err);

    })
  }
  shareviaTwitter(){
    var link:any='https://play.google.com/store/apps/details?id=com.twitter.android&hl=en'
    this.socialSharing.shareViaTwitter(this.shareCounsellorDetails,'',link)
  
    // this.socialSharing.shareWithOptions({
    //   chooserTitle: 'Soch',
    //   message: 'Hey there! I found this cool new app called Soch, I think you should try it out!',
    //   url: 'https://play.google.com/store/apps/details?id=com.twitter.android&hl=en',
    // })
    .then(res => {
      // alert("res"+res);

    }, err => {
      alert("err"+ err);

    })

  }
  close(){
    this.navCtrl.pop()
  }
  submit(){
    // console.log('sessionId',this.sessionId)
    // console.log('index',this.index)
    // console.log('allPlan',this.allPlan)
    // console.log('rateList',this.allPlan.rating)
    // console.log('List',this.allPlan.rating[this.index])
    this.allPlan.rating[this.index]={review:this.review,rating:this.selected_star.length}
    // console.log('List2',this.allPlan.rating[this.index])
    this.db.object('sessions/' + this.sessionId).update({
      selectedPlan: this.allPlan
    });
    this.close()
  }

}
