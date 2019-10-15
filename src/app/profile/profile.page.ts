import { Component, OnInit, ViewChild } from "@angular/core";
import { Http } from "@angular/http";
// import {
//   AngularFirestore,
//   AngularFirestoreDocument
// } from "@angular/fire/firestore";
import { UserService } from "../user.service";
// import { firestore } from "firebase/app";
import { AlertController } from "@ionic/angular";
import { ActivatedRoute,Router } from "@angular/router";
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

// import { AngularFireStorage } from 'angularfire2/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx'
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: "app-page",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  // mainuser: AngularFirestoreDocument;
  userPosts;
  sub;
  posts;
  username: string;
  profilePic: string;
  newEntry: boolean = false;

  imageURL: string;
  desc: string;
  title: string;
  noFace: boolean = false;

  scaleCrop: string = "-/scale_crop/200x200";
  getPost = firebase.database().ref('post');
  public posturl: any;
  // postReference: AngularFirestoreDocument;

  heartType: string = "heart-empty";
  public newComment: any;
  public poststatus: boolean = false;
  effects = {
    effect1: "",
    effect2: "-/exposure/50/-/saturation/50/-/warmth/-30/",
    effect3: "-/filter/vevera/150/",
    effect4: "-/filter/carris/150/",
    effect5: "-/filter/misiara/150/"
  };

  activeEffect: string = this.effects.effect1;
  busy: boolean = false;

  @ViewChild("fileButton") fileButton;

  filePath: string;
  fileName: string;
  audio: MediaObject;
  public ispause: boolean = false;
  public audiourltest: any;
  currentUserId: any;
  userDetail: any;
  Journel:any;

  constructor(
    public http: Http,
    // private afs: AngularFirestore,
    private user: UserService,
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    public db: AngularFireDatabase,
    public socialSharing: SocialSharing,
    public media: Media, public file: File, private nativeAudio: NativeAudio,
    // public storage: AngularFireStorage
  ) {
    // this.mainuser = afs.doc(`users/${user.getUID()}`);
    // this.sub = this.mainuser.valueChanges().subscribe(event => {
    //   this.posts = event.posts;
    //   this.username = event.username;
    //   this.profilePic = event.profilePic;
    // });
    
  }
  ionViewWillEnter() {
    
    this.sub=this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        console.log(params.id) 
        this.currentUserId = params.id
        this.Journel=true
      }
      else{
        this.currentUserId = localStorage.getItem('userid');
        console.log(this.currentUserId)
      }
      this.getPost.on('value', resp => {
        this.getPostList(resp);
      });
    });
    
    
    this.db.object('User/' + this.currentUserId).valueChanges()
      .subscribe((data: any) => {
        if (data) {
          this.userDetail = data;
          console.log(this.userDetail);

          this.username = this.userDetail.username;
          if (this.profilePic)
            this.profilePic = this.userDetail.profilePic;
        }
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  startRecord() {
    this.ispause = true;
    // this.crecordingstatus = "Stop Recording"

    // this.intercon = setInterval(function () {
    //   this.timer += 1;
    //   if (this.timer > 59) {
    //     clearInterval(this.intercon);
    //     this.stopRecord();
    //     this.timer = 0;
    //     console.log("TEst...")
    //   }
    // }.bind(this), 1000)
    this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getSeconds() + '.mp3';
    this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
    // console.log("filePath", this.filePath);

    this.audio = this.media.create(this.filePath);
    // console.log("audio", this.filePath);

    this.audio.startRecord();
  }

  stopRecord() {
    this.ispause = false;
    this.audio.stopRecord();
    // console.log("filepath", this.filePath);

    // console.log("filenameS", this.fileName);

    this.file.readAsDataURL(this.file.externalDataDirectory, this.fileName).then((file) => {
      // console.log("file", file);
      // console.log(firebase.storage.StringFormat.DATA_URL);

      let voiceRef = firebase.storage().ref('audio').child(this.fileName).putString(file, firebase.storage.StringFormat.DATA_URL).then(res => {
        // console.log(res);
        firebase.storage().ref('audio').child(this.fileName).getDownloadURL().then(url => {
          // console.log("log1: " + url);
          this.audiourltest = url;
          // console.log(this.audiourltest);
        })

      }, err => {
        console.log(err);

      });
    })


  }

  goTo(postID: string) {
    this.router.navigate(["/tabs/post/" + postID.split("/")[0]]);
  }

  ngOnInit() {

  }
  getPostList(snapshot) {
    this.posts = [];
    snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      // console.log(item);
      if (item.uid == this.currentUserId) {
        console.log(item.uid)
        this.posts.push(item);
        // console.log(this.posts);
        for (let index = 0; index < this.posts.length; index++) {
          if (this.posts[index].comment) {

            let getcomment = firebase.database().ref('post').child(this.posts[index].key).child('comment');
            getcomment.on('value', resp => {
              this.getpostcomment(this.posts[index], resp);
            });
          }
          if (this.posts[index].notes) {

            let getnotes = firebase.database().ref('post').child(this.posts[index].key).child('notes');
            getnotes.on('value', resp => {
              this.getpostnotes(this.posts[index], resp);
            });
          }
          let getlike = firebase.database().ref('post').child(this.posts[index].key).child('like');
          let getunlike = firebase.database().ref('post').child(this.posts[index].key).child('unlike');
          getlike.on('value', resp => {
            this.getpostlike(this.posts[index], resp);
          });
          getunlike.on('value', resp => {
            this.getpostunlike(this.posts[index], resp);
          });
          if (this.posts[index].uid) {
            this.db.object('User/' + this.posts[index].uid).valueChanges().subscribe((data: any) => {
              this.posts[index].profilephoto = data.profilePic;
            })
          }

        }
      }
      // console.log("roomlist",this.roomList);

    });
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
  getpostnotes(post, snapshot) {
    let tempnotes = [];
    snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      tempnotes.push(item);
      // console.log(tempcomment);

    })
    post.notes = tempnotes;
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
        if (this.currentUserId == post.like[index].uid) {
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
        if (this.currentUserId == post.unlike[index].uid) {
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
  addcomment(post) {
    let payload = {
      msg: this.newComment,
      uid: localStorage.getItem('userid')
    }
    // console.log(payload);
    // console.log(post);


    let resdata = firebase.database().ref('post').child(post.key).child('notes').push(payload)
    // console.log(resdata);

    this.newComment = '';

  }
  like(post, status) {

    if (status == 'like') {
      let resdata = firebase.database().ref('post').child(post.key).child('like').push({
        uid: this.currentUserId
      })
      // console.log(resdata);
    }
    else {

      for (let index = 0; index < post.like.length; index++) {
        if (this.currentUserId == post.like[index].uid) {
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
        uid: this.currentUserId
      })
      // console.log(resdata);

    }
    else {
      for (let index = 0; index < post.unlike.length; index++) {
        if (this.currentUserId == post.unlike[index].uid) {
          // console.log(post.unlike[index].key);
          // console.log(post.key);

          let resdata = firebase.database().ref('post').child(post.key).child('unlike').child(post.unlike[index].key).remove()
          // console.log(resdata);
        }
      }


    }
  }
  async createPost() {
    this.busy = true;

    // const image = this.imageURL;
    // const activeEffect = this.activeEffect;
    // const desc = this.desc;
    // const title = this.title;
    // const profilePic = this.profilePic;
    // const postTime = event.timeStamp;


    let payload = {
      image: this.imageURL || '',
      activeEffect: this.activeEffect || '',
      desc: this.desc || '',
      title: this.title || '',
      profilePic: this.profilePic ? this.profilePic : '',
      postTime: event.timeStamp || '',
      like: [],
      unlike: [],
      comment: [],
      notes:[],
      uid: this.currentUserId,
      poststatus: this.poststatus ? 2 : 1,
      audiourl: this.audiourltest || '',
      author: this.username,
      posturl: this.posturl || ''
    }
    // console.log(payload);

    let res = this.db.list('post').push(payload);
    // this.afs.doc(`users/${this.user.getUID()}`).update({
    //   posts: firestore.FieldValue.arrayUnion(`${image}/${activeEffect}`)
    // });

    // this.afs.doc(`posts/${image}`).set({
    //   desc,
    //   title,
    //   author: this.user.getUsername(),
    //   related: [],
    //   unrelated: [],
    //   profilePic,
    //   postTime,
    //   comments: [],
    //   effect: activeEffect
    // });

    this.busy = false;
    this.imageURL = "";
    this.desc = "";
    this.title = "";
    this.newEntry = false;
    const alert = await this.alertController.create({
      header: "Done",
      message: "Your post was created!",
      buttons: ["Cool!"]
    });

    await alert.present();

    this.router.navigate(["/tabs/profile"]);
  }

  setSelected(effect: string) {
    this.activeEffect = this.effects[effect];
  }

  uploadFile() {
    this.fileButton.nativeElement.click();
  }

  fileChanged(event) {
    this.busy = true;

    const files = event.target.files;

    const data = new FormData();
    data.append("file", files[0]);
    data.append("UPLOADCARE_STORE", "1");
    data.append("UPLOADCARE_PUB_KEY", "04f56adce4b67ee5ab17");

    this.http
      .post("https://upload.uploadcare.com/base/", data)
      .subscribe(event => {
        console.log(event);
        this.imageURL = event.json().file;
        this.busy = false;
        this.http
          .get(`https://ucarecdn.com/${this.imageURL}/detect_faces/`)
          .subscribe(event => {
            this.noFace = event.json().faces == 0;
          });
      });
  }

  poststatuschange() {
    this.poststatus = !this.poststatus;
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
}
