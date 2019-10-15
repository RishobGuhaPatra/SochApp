import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http'
// import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { UserService } from '../user.service';
// import { firestore } from 'firebase/app';
import { AlertController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
	selector: 'app-uploaderdetail',
	templateUrl: './uploaderdetail.page.html',
	styleUrls: ['./uploaderdetail.page.scss'],
})
export class UploaderDetailPage implements OnInit {

	posts;
	sub;

	imageURL: string;
	desc: string;
	title: string;
	// postReference: AngularFirestoreDocument;

	heartType: string = "heart-empty";
	public setDefault: boolean = false;
	@ViewChild('fileButton') fileButton
	counsellorId: any;
	public counsellorDetail: any;
	constructor(
		public http: Http,
		// public afstore: AngularFirestore,
		// public aff: AngularFireFunctions,
		public user: UserService,
		private alertController: AlertController,
		private router: Router,
		public nav: NavController,
		public activRoute: ActivatedRoute,
		public db: AngularFireDatabase) {
	}

	ngOnInit() {
		this.activRoute.params.subscribe((params) => {
			console.log(params)
			this.counsellorId = params.id;
			console.log(this.counsellorId);

			let getCounseller = firebase.database().ref('counsellor');
			getCounseller.on('value', resp => {
				this.getCounsellordetail(resp);
			});
		});
		this.http
			.get("https://us-central1-soch-fac74.cloudfunctions.net/retrieveCounselor")
			.subscribe(data => {
				this.posts = JSON.parse(data["_body"]);
				if (this.posts.likes && this.posts.likes.length > 0) {
					this.heartType = this.posts.likes.includes(this.user.getUID()) ? 'heart' : 'heart-empty';
				}
			});
	}
	getCounsellordetail(snapshot) {
		let templist: any = [];
		snapshot.forEach(childSnapshot => {
			let item = childSnapshot.val();
			item.key = childSnapshot.key;
			templist.push(item);
		})
		for (let index = 0; index < templist.length; index++) {
			if (this.counsellorId == templist[index].key) {
				this.counsellorDetail = templist[index];
				if (this.counsellorDetail.defaultcounseller) {
					this.setDefault = true;
				}
				console.log(this.counsellorDetail);

			}

		}
	}
	ngOnDestroy() {
		// this.sub.unsubscribe;
	}
	back() {
		this.nav.pop();
	}
	changeStatus() {
		if (this.setDefault) {
			this.db.object('User/' + localStorage.getItem('userid')).update({
				defaultcounseller: this.counsellorId
			})
		}
		else {
			this.db.object('User/' + localStorage.getItem('userid')).update({
				defaultcounseller: ''
			})
		}
	}

}
