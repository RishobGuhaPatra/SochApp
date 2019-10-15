import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
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
  author;
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
    public db: AngularFireDatabase,
    public changedetect: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.user.presentLoading();
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
    setTimeout(() => {
      this.getPost.once('value', resp => {
        this.getPostList(resp);
      });
    }, 2000);
  }
  getPostList(snapshot) {
    this.posts = [];
    snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      if (item.poststatus == 1) {

        //   this.posts[index].iscomment = false;
        //   if (this.posts[index].comment) {
        let getcomment = firebase.database().ref('post').child(item.key).child('comment');
        getcomment.once('value', resp => {
          this.getpostcomment(item, resp);
        });
      }
      if (item.like) {
        let getlike = firebase.database().ref('post').child(item.key).child('like');
        getlike.once('value', resp => {
          this.getpostlike(item, resp);
        });
      }
      else {
        item.like = [];
      }
      if (item.unlike) {
        let getunlike = firebase.database().ref('post').child(item.key).child('unlike');

        getunlike.once('value', resp => {
          this.getpostunlike(item, resp);
        });

      }
      else {
        item.unlike = []
      }
      if (item.uid) {
        this.db.object('User/' + item.uid).valueChanges().subscribe((data: any) => {
          item.profilephoto = data.profilePic;
          item.username = data.username ? data.username : "";
        })
      }
      this.posts.push(item);
      this.posts = this.posts.reverse();
      // for (let index = 0; index < this.posts.length; index++) {
      //   this.posts[index].iscomment = false;
      //   if (this.posts[index].comment) {
      //     let getcomment = firebase.database().ref('post').child(this.posts[index].key).child('comment');
      //     getcomment.once('value', resp => {
      //       this.getpostcomment(this.posts[index], resp);
      //     });
      //   }
      //   if (this.posts[index].like) {
      //     let getlike = firebase.database().ref('post').child(this.posts[index].key).child('like');
      //     getlike.once('value', resp => {
      //       this.getpostlike(this.posts[index], resp);
      //     });
      //   }
      //   else {
      //     this.posts[index].like = [];
      //   }
      //   if (this.posts[index].unlike) {
      //     let getunlike = firebase.database().ref('post').child(this.posts[index].key).child('unlike');

      //     getunlike.once('value', resp => {
      //       this.getpostunlike(this.posts[index], resp);
      //     });

      //   }
      //   else {
      //     this.posts[index].unlike = []
      //   }
      //   if (this.posts[index].uid) {
      //     this.db.object('User/' + this.posts[index].uid).valueChanges().subscribe((data: any) => {
      //       this.posts[index].profilephoto = data.profilePic;
      //       this.posts[index].username = data.username ? data.username : "";
      //     })
      //   }

      //   this.posts = this.posts.reverse();

      // }
    // }

    });
    this.user.dismissLoading();
  }
ngOnDestroy() {
  this.sub.unsubscribe;
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
  let tempcomment = [];
  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    tempcomment.push(item);
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
  else {

    // post.like = [];
  }

  if (tempcomment.length < 0) {
    post.islike = false;
    // post.like = [];
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
  else {
    // post.unlike = [];
  }

  if (tempcomment.length < 0) {
    post.isunlike = false;
  }
  // console.log(this.posts);

}
async counselorChat() {
  this.router.navigate(["/counselor-chat"]);
}
commentopen(post, i) {
  console.log(post, i);

  if (this.posts[i].iscomment) {
    this.posts[i].iscomment = false;
  }
  else {
    this.posts[i].iscomment = true;
  }
  console.log(post);

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


  let resdata = firebase.database().ref('post').child(post.key).child('comment').push(payload).then(res => {
    post.comment.push({
      uid: localStorage.getItem('userid'),
      key: res.key,
      msg: this.newComment
    })
    console.log(post);
    this.newComment = '';
  })
  // console.log(resdata);



}
like(post, status, id) {
  console.log("li", id);
  console.log(post);

  if (status == 'like') {
    let resdata = firebase.database().ref('post').child(post.key).child('like').push({
      uid: localStorage.getItem('userid')
    }).then(res => {
      console.log("like", res);
      console.log(this.posts[id]);

      this.posts[id].like.push({
        uid: localStorage.getItem('userid'),
        key: res.key
      })
      console.log(this.posts[id]);
      console.log(this.posts);
      post.islike = true;
    })
    // console.log(resdata);
  }
  else {
    // this.posts[id].like.splice(1, 0)
    for (let index = 0; index < post.like.length; index++) {
      if (localStorage.getItem('userid') == post.like[index].uid) {
        console.log(post.like[index].key);
        console.log(index);




        let resdata = firebase.database().ref('post').child(post.key).child('like').child(post.like[index].key).remove().then(res => {
          console.log(this.posts[id].like);

          this.posts[id].like.splice(index, 1);
          // this.changedetect.detach();
          post.islike = false;
          console.log(this.posts[id].like);

          console.log(post);
          // for (let i = 0; i < this.posts[id].like.length; i++) {
          //   console.log(this.posts[id].like[i]);

          //   if (localStorage.getItem('userid') == this.posts[id].like[i].uid) {
          //     console.log("inside if");
          //     console.log(i);
          //     console.log(this.posts[id].like);
          //     this.posts[id].like.splice(i, 0)
          //     console.log(this.posts[id]);
          //   }
          //   post.islike = false;
          // }
        })
        // console.log(resdata);
      }

    }
  }

}
unlike(post, status, id) {
  console.log(post, status, id);

  if (status == 'like') {
    let resdata = firebase.database().ref('post').child(post.key).child('unlike').push({
      uid: localStorage.getItem('userid')
    }).then(res => {
      this.posts[id].unlike.push({
        uid: localStorage.getItem('userid'),
        key: res.key
      })
    })
    post.isunlike = true;
  }
  else {
    for (let index = 0; index < post.unlike.length; index++) {
      if (localStorage.getItem('userid') == post.unlike[index].uid) {
        // console.log(post.unlike[index].key);
        // console.log(post.key);
        let resdata = firebase.database().ref('post').child(post.key).child('unlike').child(post.unlike[index].key).remove()
        this.posts[id].unlike.splice(index, 1);
        post.isunlike = false;
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
