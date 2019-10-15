import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { AlertController, ToastController,Platform } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { File } from '@ionic-native/file/ngx'
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Http } from '@angular/http';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import * as firebase from 'firebase';
@Component({
  selector: 'app-session-notes',
  templateUrl: './session-notes.page.html',
  styleUrls: ['./session-notes.page.scss'],
})
export class SessionNotesPage implements OnInit {
  sub:any;
  sessionNote:any={
    myDate:  new Date().toISOString(),
    title:'',
    clientId:'0',
    data:'',
    assesment:'',
    plan:'',
    audiourl:'',
    doc:'',
    image:'',
    rating:0,
    submitTime:new Date().toLocaleString(),
    cid:''
  }
  filePath: string;
  fileName: string;
  audio: MediaObject;
  public ispause: boolean = false;
  public audiourltest: any;
  busy: boolean = false
  PersonData:any;
  NotesList:any=[];
  ClientDetail:any;
  imageURL: string;
  @ViewChild("fileButton") fileButton;
  effects = {
    effect1: "",
    effect2: "-/exposure/50/-/saturation/50/-/warmth/-30/",
    effect3: "-/filter/vevera/150/",
    effect4: "-/filter/carris/150/",
    effect5: "-/filter/misiara/150/"
  };
  scaleCrop: string = "-/scale_crop/200x200";

  constructor(private route: ActivatedRoute, public alertCtrl:AlertController,public toastCtrl:ToastController,
    private router: Router,private db: AngularFireDatabase, private afStorage: AngularFireStorage,public file: File,
    private fileChooser: FileChooser,public plt:Platform,private filePicker: IOSFilePicker,public media: Media,
    private http: Http,private ft: FileTransfer, 
    private fileOpener: FileOpener, private document: DocumentViewer) { 
      
      this.PersonData=JSON.parse(localStorage.getItem('LoggedInUserData'))
      this.sessionNote.cid=this.PersonData.uid
      // this.getClientList().then((data:any)=>{
      //   if(data){
      //     for(var key in data){
      //       if(this.PersonData.uid==data[key].defaultcounseller){
      //         this.ClientList.push(data[key])
      //       }
      //     }
      //     console.log(this.ClientList)
      //   }
      // })
    }
  
  segmentTab: any;
  
  ngOnInit() {
    this.sub=this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        console.log(params.id) 
        this.sessionNote.clientId=params.id
        firebase.database().ref('User').child(params.id).once('value',snap=>{
          this.ClientDetail=snap.val()
        })
        firebase.database().ref('sessionNotes').child(this.PersonData.uid).child(this.sessionNote.clientId).on('value',snapshot=>{
          var data=snapshot.val()
          for(var key in data){
            this.NotesList.push(data[key])
          }
          console.log(this.NotesList)
        })
        
      }
    });
  }
  getClientList(){
    return new Promise((resolve)=>{
      firebase.database().ref('User').on('value',snap=>{
        var data=snap.val()
        resolve(data)
        
      })
    })
  }

  async addFile() {
    if(this.plt.is('android')){
      this.fileChooser.open()
      .then((uri) => {
        // alert(uri)
        this.file.resolveLocalFilesystemUrl(uri).then((newUri)=>{
          // alert(JSON.stringify(newUri))
          let dirPath=newUri.nativeURL;
          let dirPathSegments=dirPath.split('/')
          dirPathSegments.pop()
          dirPath=dirPathSegments.join('/')

          this.file.readAsArrayBuffer(dirPath,newUri.name).then(async (buffer)=>{
            await this.upload(buffer,newUri.name);
          })
        })
      })
      .catch(e => this.presentToast('Please try again'));
    }
    else if(this.plt.is('ios')){
      this.filePicker.pickFile()
      .then((uri) => {
        // alert(uri)
        this.file.resolveLocalFilesystemUrl(uri).then((newUri)=>{
          // alert(JSON.stringify(newUri))
          let dirPath=newUri.nativeURL;
          let dirPathSegments=dirPath.split('/')
          dirPathSegments.pop()
          dirPath=dirPathSegments.join('/')

          this.file.readAsArrayBuffer(dirPath,newUri.name).then(async (buffer)=>{
            await this.upload(buffer,newUri.name);
          })
        })
      })
      .catch(err => this.presentToast('Please try again'));
    }
    else{
      this.presentToast('Platform is not Suppported for this feature.')
    }
     
  }
  async upload(buffer,name){
    let blob=new Blob([buffer],{type:"application/pdf"})
    var fileName=new Date().toISOString()+'__'+name
    firebase.storage().ref('sessionDocument/'+ fileName).put(blob).then((d)=>{
      firebase.storage().ref('sessionDocument').child(fileName).getDownloadURL().then(url => {
        alert("log1: " + url);
        this.sessionNote.doc=url;
      })
      alert('Done');
    }).catch((error)=>{
      alert(JSON.stringify(error))
    })
  }
  
  openfile(PdfFile){
  //   this.fileOpener.open('https://firebasestorage.googleapis.com/v0/b/soch-fac74.appspot.com/o/sessionDocument%2F2019-08-27T18%3A59%3A32.608ZSOCH%20NDA.pdf?alt=media&token=b57bb6fd-c905-49d6-8f67-0c9c04ac8634', 'application/pdf')
  // .then(() => alert('File is opened'))
  // .catch(e => alert('Error opening file'+ e));
  
  let downloadUrl = PdfFile;
  let path = this.file.dataDirectory;
  const transfer = this.ft.create();
 
  transfer.download(downloadUrl, path + 'myfile.pdf').then(entry => {
    let url = entry.toURL();
 
    if (this.plt.is('ios')) {
      this.document.viewDocument(url, 'application/pdf', {});
    } else {
      this.fileOpener.open(url, 'application/pdf')
        .then(() => alert('File is opened'))
        .catch(e => alert('Error opening file'+ e));
    }
  });
  
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
    this.file.readAsDataURL(this.file.externalDataDirectory, this.fileName).then((file) => {
      let voiceRef = firebase.storage().ref('audio').child(this.fileName).putString(file, firebase.storage.StringFormat.DATA_URL).then(res => {
        // console.log(res);
        firebase.storage().ref('audio').child(this.fileName).getDownloadURL().then(url => {
          // console.log("log1: " + url);
          this.audiourltest = url;
          this.sessionNote.audiourl=url;
         
          // console.log(this.audiourltest);
        })
      }, err => {
        console.log(err);
      });
    })

    
  }
  // saveaudio(){
  //   return new Promise((resolve)=>{
  //     this.file.readAsDataURL(this.file.externalDataDirectory, this.fileName).then((file) => {
  //       let voiceRef = firebase.storage().ref('audio').child(this.fileName).putString(file, firebase.storage.StringFormat.DATA_URL).then(res => {
          
  //         firebase.storage().ref('audio').child(this.fileName).getDownloadURL().then(url => {
            
  //           this.audiourltest = url;
  //           this.sessionNote.audiourl=url;
  //           resolve(true)
  //         })
  //       }, err => {
  //         console.log(err);
  //       });
  //     })
  //   })
  // }
  uploadFile() {
    this.fileButton.nativeElement.click();
  }

  fileChanged(event) {
		this.busy = true;
		const files = event.target.files

		const data = new FormData()
		data.append('file', files[0])
		data.append('UPLOADCARE_STORE', '1')
		data.append('UPLOADCARE_PUB_KEY', 'ada5e3cb2da06dee6d82')

		this.http.post('https://upload.uploadcare.com/base/', data)
			.subscribe(event => {
				const uuid = event.json().file;
				this.sessionNote.image = uuid;
				this.busy = false;
				
				// this.mainuser.update({
				// 	profilePic: uuid
				// })
			})
	}

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  save(){
    
    firebase.database().ref('sessionNotes').child(this.PersonData.uid).child(this.sessionNote.clientId).push(this.sessionNote).then(x=>{
      this.presentToast('Session Note Saved')
      this.router.navigate(["/counsellor-tab/clients"]);
    })

    console.log(this.sessionNote)
  }
}