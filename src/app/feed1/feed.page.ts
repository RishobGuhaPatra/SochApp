import { Component, OnInit } from "@angular/core";
// import { AngularFireFunctions, AngularFireFunctionsModule } from "@angular/fire/functions";
import { Http } from "@angular/http";
// import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
// import { firestore } from "firebase/app";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: "app-feed",
  templateUrl: "./feed.page.html",
  styleUrls: ["./feed.page.scss"]
})
export class FeedPage implements OnInit {
  posts;
  sub;

  imageURL: string;
  desc: string;
  title: string;
  getPost = firebase.database().ref('post');
  // postReference: AngularFirestoreDocument;

  heartType: string = "heart-empty";
  public newComment: any;

  constructor(
    // private aff: AngularFireFunctions,
    private http: Http,
    // private afs: AngularFirestore,
    private user: UserService,
    private router: Router,
    public socialSharing: SocialSharing,
    private iab: InAppBrowser,
    public db: AngularFireDatabase
  ) { 
    console.log('Hello')
  }

  ngOnInit() {

    // this.http
    //   .get("https://us-central1-soch-fac74.cloudfunctions.net/retrieveFeed2")
    //   .subscribe(data => {
    //     console.log(JSON.parse(data["_body"]));

    //     this.posts = JSON.parse(data["_body"]);
    //     console.log(this.posts);

    //     if (this.posts.likes && this.posts.likes.length > 0){
    //       this.heartType = this.posts.likes.includes(this.user.getUID()) ? 'heart' : 'heart-empty';
    //     }
    //   });
  }
  ionViewWillEnter() {
    this.getPost.on('value', resp => {
      this.getPostList(resp);
    });
  }
  getPostList(snapshot) {
    this.posts = [];
    snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      if (item.poststatus == 1) {
        this.posts.push(item);
        // console.log(this.posts);
        for (let index = 0; index < this.posts.length; index++) {
          if (this.posts[index].comment) {
            let getcomment = firebase.database().ref('post').child(this.posts[index].key).child('comment');
            getcomment.on('value', resp => {
              this.getpostcomment(this.posts[index], resp);
            });
          }
          if (this.posts[index].like) {
            let getlike = firebase.database().ref('post').child(this.posts[index].key).child('like');
            getlike.on('value', resp => {
              this.getpostlike(this.posts[index], resp);
            });
          }
          if (this.posts[index].unlike) {
            let getunlike = firebase.database().ref('post').child(this.posts[index].key).child('unlike');

            getunlike.on('value', resp => {
              this.getpostunlike(this.posts[index], resp);
            });

          }
          if (this.posts[index].uid) {
            this.db.object('User/' + this.posts[index].uid).valueChanges().subscribe((data: any) => {
              this.posts[index].profilephoto = data.profilePic;
            })

            // let getuser = firebase.database().ref('User').child(this.posts[index].uid);

            // getuser.on('value', resp => {
            //   this.getuserdetail(this.posts[index], resp);
            // });

          }



        }
      }
      // console.log("roomlist",this.roomList);

    });
  }
  ngOnDestroy() {
    // this.sub.unsubscribe;
  }
  getuserdetail(post, snapshot) {
    console.log(snapshot);

    let tempcomment = [];
    snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      // item.key = childSnapshot.key;
      console.log(item);

      // tempcomment.push(item);
      // console.log(tempcomment);

    })
    post.profilephoto = tempcomment;
    console.log(this.posts);

  }
  getpostcomment(post, snapshot) {
    let tempcomment = [];
    snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      tempcomment.push(item);
      // console.log(tempcomment);

    })
    post.comment = tempcomment;
    // console.log(this.posts);

  }
  getpostlike(post, snapshot) {
    // console.log("post", post);

    let tempcomment = [];
    snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      tempcomment.push(item);
      // console.log("like", tempcomment);

    })
    post.like = tempcomment;


    if (post.like && post.like.length > 0) {

      for (let index = 0; index < post.like.length; index++) {
        if (localStorage.getItem('userid') == post.like[index].uid) {
          post.islike = true;

        }
        else {
          // console.log("else");
          post.islike = false;
        }

      }
    }

    if (tempcomment.length < 0) {
      post.islike = false;
    }
    // console.log(this.posts);

  }
  getpostunlike(post, snapshot) {
    let tempcomment = [];
    snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      tempcomment.push(item);
      // console.log(tempcomment);

    })
    post.unlike = tempcomment;

    if (post.unlike && post.unlike.length > 0) {

      for (let index = 0; index < post.unlike.length; index++) {
        if (localStorage.getItem('userid') == post.unlike[index].uid) {
          post.isunlike = true;

        }
        else {
          // console.log("else");
          post.isunlike = false;
        }
      }
    }


    if (tempcomment.length < 0) {
      post.isunlike = false;
    }
    // console.log(this.posts);

  }
  async counselorChat() {
    this.router.navigate(["/counselor-chat"]);
  }

  toggleHeart() {
    // if (this.heartType == "heart-empty") {
    //   this.postReference.update({
    //     likes: firestore.FieldValue.arrayUnion(this.user.getUID())
    //   });
    // } else {
    //   this.postReference.update({
    //     likes: firestore.FieldValue.arrayRemove(this.user.getUID())
    //   });
    // }
  }

  addcomment(post) {
    let payload = {
      msg: this.newComment,
      uid: localStorage.getItem('userid')
    }
    // console.log(payload);
    // console.log(post);


    let resdata = firebase.database().ref('post').child(post.key).child('comment').push(payload)
    // console.log(resdata);

    this.newComment = '';

  }
  like(post, status) {

    if (status == 'like') {
      let resdata = firebase.database().ref('post').child(post.key).child('like').push({
        uid: localStorage.getItem('userid')
      })
      // console.log(resdata);
    }
    else {

      for (let index = 0; index < post.like.length; index++) {
        if (localStorage.getItem('userid') == post.like[index].uid) {
          // console.log(post.like[index].key);

          let resdata = firebase.database().ref('post').child(post.key).child('like').child(post.like[index].key).remove()
          // console.log(resdata);
        }

      }
    }

  }
  unlike(post, status) {
    if (status == 'like') {
      let resdata = firebase.database().ref('post').child(post.key).child('unlike').push({
        uid: localStorage.getItem('userid')
      })
      // console.log(resdata);

    }
    else {
      for (let index = 0; index < post.unlike.length; index++) {
        if (localStorage.getItem('userid') == post.unlike[index].uid) {
          // console.log(post.unlike[index].key);
          // console.log(post.key);

          let resdata = firebase.database().ref('post').child(post.key).child('unlike').child(post.unlike[index].key).remove()
          // console.log(resdata);
        }
      }


    }
  }
  share(post) {
    this.socialSharing.shareWithOptions({
      chooserTitle: 'Sochapp',
      message: post.desc,
      url: 'https://ucarecdn.com/' + post.image + '/',
      subject: post.title
    }).then(res => {
      // console.log("res", res);

    }, err => {
      console.log("err", err);

    })
  }
  openurl(url) {
    const browser = this.iab.create(url);
  }
}
