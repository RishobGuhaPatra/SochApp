import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http'
// import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { UserService } from '../user.service';
// import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { AngularFireFunctions } from '@angular/fire/functions';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-uploader',
	templateUrl: './uploader.page.html',
	styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

	posts;
	sub;

	imageURL: string;
	desc: string;
	title: string;
	getCounseller = firebase.database().ref('counsellor');
	public counsellorList: any = [];
	// postReference: AngularFirestoreDocument;
	userdata: any;
	heartType: string = "heart-empty";
	@ViewChild('fileButton') fileButton

	constructor(
		public http: Http,
		// public afstore: AngularFirestore,
		// public aff: AngularFireFunctions,
		public user: UserService,
		private alertController: AlertController,
		private router: Router,
		public db: AngularFireDatabase,
		public modalController: ModalController) {
	}

	ngOnInit() {
		this.http
			.get("https://us-central1-soch-fac74.cloudfunctions.net/retrieveCounselor")
			.subscribe(data => {
				this.posts = JSON.parse(data["_body"]);
				if (this.posts.likes && this.posts.likes.length > 0) {
					this.heartType = this.posts.likes.includes(this.user.getUID()) ? 'heart' : 'heart-empty';
				}
			});
		this.db.object('User/' + localStorage.getItem('userid')).valueChanges().subscribe(data => {
			this.userdata = data;

		})
		this.getCounseller.on('value', resp => {
			this.counsellorList=[]
			this.getCounsellorList(resp);
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe;
	}

	getCounsellorList(snapshot) {
		snapshot.forEach(childSnapshot => {
			let item = childSnapshot.val();
			item.key = childSnapshot.key;
			this.counsellorList.push(item);
		})
	}

	sessionList() {
		this.router.navigate(['sessions']);
	}
	// addcoun() {
	// 	let payload = {
	// 		name: "rishob",
	// 		phone: "325689544",
	// 		email: "rishob@gmail.com",
	// 		skills: "master",
	// 		education: "Master",
	// 		bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	// 		rate: '',
	// 		reviews: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
	// 	}
	// 	let resdata = firebase.database().ref('counsellor').push(payload)
	// }
}
